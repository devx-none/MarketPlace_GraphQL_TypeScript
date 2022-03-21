"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
exports.resolvers = {
    Mutation: {
        createCategory: async (_, { name, thumbnail, description }) => {
            const category = await index_1.Category.create({
                name,
                thumbnail,
                description,
            });
            return category;
        },
        deleteCategory: async (_, { id }) => {
            const category = await index_1.Category.findByIdAndDelete(id);
            return category;
        },
    },
    Query: {},
};
//# sourceMappingURL=resolvers.js.map