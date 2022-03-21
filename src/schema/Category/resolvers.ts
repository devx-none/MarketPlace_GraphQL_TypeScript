import type { Resolvers } from '@generated/types';
import { Category, ICategory } from '@models/index';

export const resolvers: Resolvers = {
  Mutation: {
    createCategory: async (_, { name, thumbnail, description }) => {
      const category: ICategory = await Category.create({
        name,
        thumbnail,
        description,
      });
      return category;
    },
    deleteCategory: async (_, { id }) => {
      const category: ICategory | null = await Category.findByIdAndDelete(id);
      return category;
    },
  },
  Query: {},
};
