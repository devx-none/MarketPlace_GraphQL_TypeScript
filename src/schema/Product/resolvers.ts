import type { Resolvers } from '@generated/types';
import { IProduct, Product, IBrand, ICategory, Brand } from '@models/index';

export const resolvers: Resolvers = {
  Query: {
    products: async (parent, args) => {
      const products: Array<IProduct> = await Product.find();
      return products;
    },
    product: async (parent, args) => {
      const product: IProduct | null = await Product.findById(args.id);
      return product;
    },
  },
  Mutation: {
    createProduct: async (_, { input }) => {
      const product: IProduct = await Product.create(input);
      return product;
    },
  },
  Product: {
    brand: async ({ id }) => {
      const brand: IBrand = await Product.findById(id).populate('brand');
      return brand;
    },
    category: async ({ id }) => {
      const category: ICategory = await Product.findById(id).populate(
        'category'
      );
      return category;
    },
  },
};
