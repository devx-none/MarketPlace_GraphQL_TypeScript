"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permission_1 = require("../../middlewares/permission");
const permission = {
    Query: {
        hello: permission_1.isAuthenticated,
    },
    Mutation: {
        register: permission_1.isAuthenticated,
    },
};
exports.default = permission;
//# sourceMappingURL=permission.js.map