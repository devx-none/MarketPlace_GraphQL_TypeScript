"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permission_1 = require("../../middlewares/permission");
const graphql_shield_1 = require("graphql-shield");
const permission = {
    Query: {
        hello: permission_1.isAuthenticated,
    },
    Mutation: {
        "*": graphql_shield_1.allow,
    },
};
exports.default = permission;
//# sourceMappingURL=permission.js.map