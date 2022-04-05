import { Role } from '@ts/enums';
import { Schema, model } from 'mongoose';
import { ICart } from '@models/index';

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  cart: ICart;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, 
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'], 
    },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: Role,
      default: Role.USER,
    },
    cart:{type: Schema.Types.ObjectId, ref: 'cart' }
  },

  { timestamps: true }
);

// 3. Create a Model.
export const User = model<IUser>('User', schema);
