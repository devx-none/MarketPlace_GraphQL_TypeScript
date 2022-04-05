import type { Resolvers } from '@generated/types';
import { ICart, Cart ,Product,IProduct } from '@models/index';

export const resolvers: Resolvers = {
  Query: {
    // list products in cart by user
    cart: async (parent, args) => {
      const cart: ICart | null = await Cart.findOne({ user: args.id });
      console.log(cart);
      if(!cart) return null;
      return cart;
    },

  },
  Mutation: {

    //add product in cart
    addProductInCart: async (_, { input }) => {
      const cart: ICart | null = await Cart.findById(input.cartId);
      if (cart) {
        const product: IProduct | null = await Product.findById(input.products);
        if (product) {
          cart.products.push(product);
          cart.amount += product.price;
          cart.save();
          return cart;
        }
      }
      return null;
    },

    //update product in cart
     updateProductInCart: async (_, { input }) => {
      const cart: ICart | null = await Cart.findOne({user: input.user});
      if(cart){
        const product: IProduct | null = await Product.findById(input.product);
        if(product){
          cart.products.push(product);
          cart.amount += product.price;
          cart.save();
          return cart;
        }
      }
      return null;
    },
  },
  Cart: {
     products: async (cart: ICart) => {
      const products: Array<IProduct> = await Product.find({
        _id: { $in: cart.products },
      });
      return products;
    },
  },
 
  
};
  
  

