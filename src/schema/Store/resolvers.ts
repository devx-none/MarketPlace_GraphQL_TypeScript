import type { Resolvers } from '@generated/types';
import paginate from '@lib/pagination';
import { Store, IStore } from '@models/index';

interface PaginatedStore {
  data: Array<IStore>;
  pageInfo: {
    hasNextPage: boolean;
    nextCursor: string | null;
  };
}

export const resolvers: Resolvers = {
  Query: {
    stores: async (parent, { input }) => {
      const { limit, cursor } = input!;
      const stores: PaginatedStore = await paginate(limit, cursor, Store);

      return stores;
    },
    store: async (parent, args) => {
      const store: IStore | null = await Store.findById(args.id);
      return store;
    },
  },
  Mutation: {
    createStore: async (_, { name, thumbnail }) => {
      const store: IStore = await Store.create({ name, thumbnail });
      return store;
    },
    deleteStore: async (_, { id }) => {
      const store: IStore | null = await Store.findByIdAndDelete(id);
      return store;
    },
  },
};
