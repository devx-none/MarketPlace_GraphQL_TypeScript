import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`

input OrderInput {
    user: String!
    cartId: String!
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
    cartId: Cart
    products: Product
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
    products: [Product]!
   

  }
  type Product {
    id: ID!
    name: String!
    discount: Float!
  }

  type Query {
    orders(user: String!):Order
  }

  type Mutation {
    addOrderByCart(input: OrderInput!): Order!

  }
`;
