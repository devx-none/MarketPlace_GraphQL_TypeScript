import type { Resolvers } from '@generated/types';
import { ICart, Cart ,Product,IProduct } from '@models/index';

export const resolvers: Resolvers = {
  Query: {
    carts: async (_, __,{}) => {
      const carts:Array<ICart> = await Cart.find().populate('products');
      return carts;
    },
    cart:  async ( iparent, args ) => {
      const cart: ICart  = await Cart.findOne({user:args.id});
      return cart;
    },
  },
  Mutation: {
    createCart: async (_, { input }) => {
      const cart: ICart = await Cart.create(input);
      return cart;
    },
  }
  
  
};
