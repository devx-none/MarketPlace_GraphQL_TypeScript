"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
exports.typeDefs = (0, apollo_server_express_1.gql) `
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  enum Role {
    USER
    ADMIN
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: Role!
  }

  type Query {
    hello: String
  }

  type Mutation {
    register(input: UserInput): User!
  }
`;
//# sourceMappingURL=typeDefs.js.map