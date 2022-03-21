"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const compression_1 = __importDefault(require("compression"));
const graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const ws_1 = require("ws");
const ws_2 = require("graphql-ws/lib/use/ws");
const context_1 = require("./context");
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
const pubsub_1 = require("./pubsub");
const graphql_upload_1 = require("graphql-upload");
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 4000;
const bootstrap = async (schema) => {
    // Create an Express app and HTTP server; we will attach both the WebSocket
    // server and the ApolloServer to this HTTP server.
    const app = (0, express_1.default)();
    const httpServer = (0, http_1.createServer)(app);
    app.use((0, cors_1.default)());
    app.use((0, compression_1.default)());
    // app.use(
    //   helmet({
    //     contentSecurityPolicy: isProduction,
    //     crossOriginEmbedderPolicy: isProduction,
    //   })
    // );
    app.use((0, graphql_upload_1.graphqlUploadExpress)({
        maxFileSize: 10000000,
        maxFiles: 10,
    }));
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
    const wsServer = new ws_1.WebSocketServer({
        server: httpServer,
        path: '/gql',
    });
    // Save the returned server's info so we can shutdown this server later
    const serverCleanup = (0, ws_2.useServer)({
        schema,
        context: () => {
            return {
                pubsub: pubsub_1.pubsub,
            };
        },
    }, wsServer);
    // Set up ApolloServer.
    const server = new apollo_server_express_1.ApolloServer({
        introspection: true,
        context: context_1.context,
        schema,
        plugins: [
            (0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer }),
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
        validationRules: [(0, graphql_depth_limit_1.default)(10)],
        formatError: (error) => {
            return error;
        },
    });
    await server.start();
    server.applyMiddleware({ app, path: '/gql', cors: { origin: '*' } });
    // Now that our HTTP server is fully set up, we can listen to it.
    httpServer.listen(port, async () => {
        console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
        const { connection } = await (0, db_1.db)();
        // connect to database
        console.log(`👋 Connected to database successfully: ${connection.name}`);
    });
};
exports.bootstrap = bootstrap;
//# sourceMappingURL=apollo.js.map