import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type Brand {
    id: ID!
    name: String!
    thumbnail: String!
  }

  type Mutation {
    createBrand(name: String!, thumbnail: String!): Brand!
    deleteBrand(id: ID!): Brand
  }
`;
