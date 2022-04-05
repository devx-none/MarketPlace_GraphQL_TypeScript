import type { Resolvers } from '@generated/types';
import { IProduct, Product, ICart,Cart, IOrder, Order } from '@models/index';

export const resolvers: Resolvers = {
  Query: {
    //list order by user
      orders: async (parent, args) => {
      const orders: IOrder[] = await Order.findById(args.user);
      return orders;
    },
    
  },
  Mutation: {

    //add new order by cart
    addOrderByCart: async (_, { input }) => {
      const cart: ICart = await Cart.findById(input.cartId);      
      const order: IOrder = await Order.create(input);
      cart.products.forEach(async (product) => {
        order.products.push(product);      
      });
      order.amount = cart.amount;
      order.save();
      cart.products = [];
      cart.amount = 0;
      cart.save();
      return order;
    },
  },
  Order: {
    products: async (parent, args) => {
      const products: Array<IProduct> = await Order.findById(parent.id).populate('products');
      return products;
    },
  },

    
  
};
  

