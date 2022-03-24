import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    role:Role!
    
  }

  enum Role {
    USER
    SELLER
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
    getAllUsers:[User!]
  }

type UserLogin{
  user: User
  accessToken:String
} 

  type Mutation {
    register(input: UserInput): User!
    Login(email:String!,password:String!):UserLogin

  }
`;
