import type { Resolvers } from '@generated/types';
import { Brand, IBrand } from '@models/index';

export const resolvers: Resolvers = {
  Mutation: {
    createBrand: async (_, { name, thumbnail }) => {
      const brand: IBrand = await Brand.create({
        name,
        thumbnail,
      });
      return brand;
    },
    deleteBrand: async (_, { id }) => {
      const brand: IBrand | null = await Brand.findByIdAndDelete(id);
      return brand;
    },
  },
  Query: {},
};
