import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
input CartInput {
    cartId: ID!
    user: String!
    products: [ID!]!
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
    carts: [Cart] 
    cart(id: String!): Cart
  }

  type Mutation {
    addProductInCart(input: CartInput!): Cart!
  }
`;
