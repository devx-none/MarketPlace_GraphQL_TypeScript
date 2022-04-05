import DataLoader from 'dataloader';
import { Model, Document } from 'mongoose';

// create a dataloader for the given model
export const createLoader = (Model: Model<Document>) => {
  // init the dataloader
  const loader = new DataLoader(async (keys) => {
    const data: Array<any> = await Model.find({ _id: { $in: keys } });
    return keys.map((key) => data.filter(({ id }) => id === key));
  });

  // return the dataloader loader function
  return {
    load: async (id: string) => loader.load(id),
    loadMany: async (ids: Array<string>) => loader.loadMany(ids),
  };
};
// create a dataloader for the given model
