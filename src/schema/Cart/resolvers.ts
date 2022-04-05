import type { Resolvers } from '@generated/types';
import { ICart, Cart ,Product,IProduct } from '@models/index';

export const resolvers: Resolvers = {
  Query: {
    // list products in cart by user
    cart: async (parent, args) => {
      const cart: ICart | null = await Cart.findOne({user: args.id}).populate('Products');
      return cart;
    },
  },
  Mutation: {

    //add product in cart
    addProductInCart: async (_, { input }) => {
      const cart: ICart = await Cart.findById(input.cartId);
      const product: IProduct = await Product.findById(input.products);
      cart.products.push(product);
      cart.amount += product.price;
      cart.save();
      return cart;
    },
  },
  Cart: {
    products: async (parent, args) => {
      const products: Array<IProduct> = await Cart.findById(parent.id).populate('products');
      return products;
    },
  },
  //update product in cart 
  // updateProductInCart: async (_, { input }) => {
  //   const cart: ICart = await Cart.findById(input.cartId);
  //   const product: IProduct = await Product.findById(input.productId);
  //   cart.products.pull(product);
  //   cart.amount -= product.price;
  //   cart.save();
  //   return cart;
  // }
  
};
  
  

