"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
exports.resolvers = {
    Mutation: {
        createBrand: async (_, { name, thumbnail }) => {
            const brand = await index_1.Brand.create({
                name,
                thumbnail,
            });
            return brand;
        },
        deleteBrand: async (_, { id }) => {
            const brand = await index_1.Brand.findByIdAndDelete(id);
            return brand;
        },
    },
    Query: {},
};
//# sourceMappingURL=resolvers.js.map