import express, { NextFunction, Request, Response } from 'express';
import { createServer } from 'http';
import compression from 'compression';
import helmet from 'helmet';
import depthLimit from 'graphql-depth-limit';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { context } from './context';
import { GraphQLSchema } from 'graphql';
import { db } from './db';
import cors from 'cors';
import { pubsub } from './pubsub';
import { graphqlUploadExpress } from 'graphql-upload';
// import {InMemoryCache} from "appolo-cache-inmemory";

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 4000;

export const bootstrap = async (schema: GraphQLSchema) => {
  // Create an Express app and HTTP server; we will attach both the WebSocket
  // server and the ApolloServer to this HTTP server.
  const app = express();
  const httpServer = createServer(app);
  app.use(cors());
  app.use(compression());
  // app.use(
  //   helmet({
  //     contentSecurityPolicy: isProduction,
  //     crossOriginEmbedderPolicy: isProduction,
  //   })
  // );
  app.use(
    graphqlUploadExpress({
      maxFileSize: 10000000,
      maxFiles: 10,
    })
  );
 
 
  //Files Stream to Azure for now
  // app.use(
  //   "/media/:key",
  //   catchAsync(async (req: Request, res: Response, nex: NextFunction) => {
  //     const { key } = req.params;
  //     const url = await getFileStreamAzure(key);
  //     res.json({ url });
  //     // (await getFileStreamAzure(key))?.pipe(res);
  //   })
  // );

  // Create our WebSocket server using the HTTP server we just set up.
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/gql',
  });

  // Save the returned server's info so we can shutdown this server later
  const serverCleanup = useServer(
    {
      schema,
      context: () => {
        return {
          pubsub,
        };
      },
    },
    wsServer
  );

  // Set up ApolloServer.
  const server = new ApolloServer({
    introspection: true,
    context,
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
    validationRules: [depthLimit(10)],
    formatError: (error: any) => {
      return error;
    },
  });

  await server.start();
  server.applyMiddleware({ app, path: '/gql', cors: { origin: '*' } });

  // Now that our HTTP server is fully set up, we can listen to it.
  httpServer.listen(port, async () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
    const { connection } = await db();
    // connect to database
    console.log(`👋 Connected to database successfully: ${connection.name}`);
  });
};
