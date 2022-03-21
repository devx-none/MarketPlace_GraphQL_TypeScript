"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const pubsub_1 = require("./pubsub");
const context = async ({ req }) => {
    return {
        req,
        pubsub: pubsub_1.pubsub,
    };
};
exports.context = context;
//# sourceMappingURL=context.js.map