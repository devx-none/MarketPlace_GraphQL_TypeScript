import { Document ,Schema, model } from 'mongoose';
import { IProduct ,IUser} from '@models/index';

// 1. Create an interface representing a document in MongoDB.
export interface ICart extends Document {
    id: string;
    user: IUser;
    products: IProduct[];
    amount : number;
    status :boolean
  }
  
  // 2. Create a Schema corresponding to the document interface.
  const schema = new Schema<ICart>(
    {
      user: {type: Schema.Types.ObjectId, ref: 'user' },
      // products: [{ 
      //   product : {type: Schema.Types.ObjectId, ref: 'product' },
      //   quantity : { type: Schema.Types.Number}
      // }],
      products : [{type: Schema.Types.ObjectId, ref: 'product'}],
      amount : { type: Schema.Types.Number},
      // status : { type: Schema.Types.Boolean, default: false},
    },

    { timestamps: true }
  );
  
  // 3. Create a Model.
  export const Cart = model<ICart>('Cart', schema);