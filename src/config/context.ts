import { Request ,Response } from 'express';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { pubsub } from './pubsub';
export interface Context {
  req: Request;
  res: Response;
  pubsub: RedisPubSub;
}

export const context = async ({ req ,res }: { req: Request ,res: Response}): Promise<Context> => {
  return {
    req,
    res,
    pubsub,
  };
};
