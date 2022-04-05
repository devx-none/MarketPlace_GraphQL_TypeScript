import { Document ,Schema, model } from 'mongoose';
import { IProduct ,IUser ,ICart} from '@models/index';
import { DeliveryType ,DeliveryStatus } from '@ts/enums';

// 1. Create an interface representing a document in MongoDB.
export interface IOrder extends Document{
    id: string;
    user: IUser;
    cartId: ICart;
    products: IProduct[];
    country: string;
    city: string;
    zipCode: number;
    address:string;
    delivery: DeliveryType;
    status : DeliveryStatus;
    traking:string;
    estimatedTime: Date;
    amount: number;

  }
  
  // 2. Create a Schema corresponding to the document interface.
  const schema = new Schema<IOrder>(
    {
      user: { type: Schema.Types.ObjectId, ref: 'user' },
      cartId: { type: Schema.Types.ObjectId, ref: 'cart' },
      products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
      country :{ type: String, required: true},
      city :{ type: String, required: true },
      zipCode :{ type: Number, required: true},
      address : { type: String, required: true},
      delivery:{
        type: String,
        enum: DeliveryType,
        default: DeliveryType.STANDARD
      },
      status:{
        type: String,
        enum: DeliveryStatus,
        default: DeliveryStatus.PENDING
      },
      traking: { type: String},
      estimatedTime: Date,
      amount: { type: Number }

    },
    { timestamps: true }
  );
  
  // 3. Create a Model.
  export const Order = model<IOrder>('Order', schema);