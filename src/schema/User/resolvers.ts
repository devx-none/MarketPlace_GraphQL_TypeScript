import type { Resolvers } from '@generated/types';
import { User, IUser ,Cart ,ICart } from '@models/index';
import { hash , compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

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
        role,
        cart: new Cart({
          products: [],
          amount: 0,
        }),
        
        
      });
      const cart: ICart = await Cart.create({user:user.id});

      return user;
    },
    Login : async(_,{email,password},{res}) => {
      const user = await User.findOne({where:{email}})
      if(!user){
        return null;
      }
      const valid = await compare(password, user.password);
      if(!valid){
        return null;
      }
      const refreshToken = sign({ userId:user.id ,role:user.role},'VfbmCniE3sSIyQjbzP2vKqioS32AwKcI',{
        expiresIn :"7d"
      })
      const accessToken = sign({ userId:user.id ,role:user.role},'cddacc6572bb10fe9d25783fa17da5ad',{
        expiresIn :"15min"
      })
      // res.cookie("refresh-token",refreshToken,{expires:60 * 60 * 24 * 7})
      res.cookie("access-token",accessToken)

      return {user ,accessToken} ;
 
    },
  },
};
