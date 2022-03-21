"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pubsub = void 0;
const graphql_redis_subscriptions_1 = require("graphql-redis-subscriptions");
const ioredis_1 = __importDefault(require("ioredis"));
const options = {
    host: process.env.REDIS_DOMAIN_NAME,
    port: process.env.REDIS_PORT_NUMBER,
    password: process.env.REDIS_PASSWORD,
    retryStrategy: (times) => {
        // reconnect after
        return Math.min(times * 50, 2000);
    },
};
exports.pubsub = new graphql_redis_subscriptions_1.RedisPubSub({
    publisher: new ioredis_1.default(options),
    subscriber: new ioredis_1.default(options),
});
//# sourceMappingURL=pubsub.js.map