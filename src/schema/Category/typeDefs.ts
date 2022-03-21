import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type Category {
    id: ID!
    name: String!
    description: String!
    thumbnail: String!
  }

  type Mutation {
    createCategory(
      name: String!
      description: String!
      thumbnail: String!
    ): Category!
    deleteCategory(id: ID!): Category
  }
`;
