import { Schema, model, ObjectId } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface ICategory {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<ICategory>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
});

// 3. Create a Model.
export const Category = model<ICategory>('Category', schema);
