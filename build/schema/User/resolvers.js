"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
const bcrypt_1 = require("bcrypt");
exports.resolvers = {
    Mutation: {
        register: async (_, { input }) => {
            const { email, firstName, lastName } = input;
            // hash password
            const password = await (0, bcrypt_1.hash)(input?.password, 10);
            // save user in database
            const user = await index_1.User.create({
                firstName,
                lastName,
                email,
                password,
            });
            return user;
        },
    },
};
//# sourceMappingURL=resolvers.js.map