import type { Resolvers } from '@generated/types';
import { User, IUser } from '@models/index';
import { hash } from 'bcrypt';

export const resolvers: Resolvers = {
  Query: {
    getAllUsers: async (_, __, {}) => {
      const users: IUser[] = await User.find({});
      return users;
    },
  },
  Mutation: {
    register: async (_, { input }) => {
      const { email, firstName, lastName ,role } = input!;

      // hash password
      const password = await hash(input?.password!, 10);

      // save user in database
      const user: IUser = await User.create({
        firstName,
        lastName,
        email,
        password,
        role
        
      });

      return user;
    },
  },
};
