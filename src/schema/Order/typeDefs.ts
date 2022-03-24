import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`

input OrderInput {
    user: String!
    cart: ID!
    country: String!
    city: String!
    zipCode: Int!
    address: String!
    delivery: String!
    status: String!
    traking: String!
    estimatedTime: String!
  }
  type Order {
    id: ID!
    user: String!
    cart: Cart
    country: String!
    city: String!
    zipCode: Int!
    address: String!
    delivery: String!
    status: String!
    traking: String!
    estimatedTime: String!
    
  }

  type Cart {
    id: ID!
    user: String!
    products: [Product]
    amount: Float!

  }
  type Product {
    id: ID!
    name: String!
    price: Float!
    discount: Float!
  }

  type Query {
    orders(user: String!):Order
  }

  type Mutation {
    createOrder(input: OrderInput!): Order!

  }
`;
