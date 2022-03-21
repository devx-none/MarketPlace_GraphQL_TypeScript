"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
// Provide resolver functions for your schema fields
exports.resolvers = {
    Query: {
        admin: () => "i am admin",
        user: () => "i am user",
    },
};
//# sourceMappingURL=resolvers.js.map