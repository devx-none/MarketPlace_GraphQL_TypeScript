"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.isAuthenticated = void 0;
const graphql_shield_1 = require("graphql-shield");
exports.isAuthenticated = (0, graphql_shield_1.rule)({ cache: 'contextual' })(async (parent, args, ctx, info) => {
    return true;
});
exports.isAdmin = (0, graphql_shield_1.rule)({ cache: 'contextual' })(async (parent, args, ctx, info) => {
    return ctx.user.role === 'admin';
});
//# sourceMappingURL=permission.js.map