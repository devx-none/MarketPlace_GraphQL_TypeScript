"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
exports.typeDefs = (0, apollo_server_express_1.gql) `
  enum StoreStatus {
    ACTIVE
    INACTIVE
  }

  input paginate {
    cursor: String
    limit: Float
  }

  type PageInfo {
    hasNextPage: Boolean!
    nextCursor: String
  }

  type PaginateStore {
    data: [Store!]!
    pageInfo: PageInfo!
  }

  type Store {
    id: ID!
    name: String!
    thumbnail: String!
    products: [Product]!
    owner: User!
    status: StoreStatus!
  }

  type Query {
    stores(input: paginate): PaginateStore
    store(id: String!): Store
  }

  type Mutation {
    createStore(name: String!, thumbnail: String!): Store!
    deleteStore(id: ID!): Store
  }
`;
//# sourceMappingURL=typeDefs.js.map