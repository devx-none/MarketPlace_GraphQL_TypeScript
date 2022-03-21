import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
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
