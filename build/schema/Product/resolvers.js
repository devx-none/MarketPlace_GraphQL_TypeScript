"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        products: async (parent, args) => {
            const products = await index_1.Product.find();
            return products;
        },
        product: async (parent, args) => {
            const product = await index_1.Product.findById(args.id);
            return product;
        },
    },
    Mutation: {
        createProduct: async (_, { input }) => {
            const product = await index_1.Product.create(input);
            return product;
        },
    },
    Product: {
        brand: async ({ id }) => {
            const brand = await index_1.Product.findById(id).populate('brand');
            return brand;
        },
        category: async ({ id }) => {
            const category = await index_1.Product.findById(id).populate('category');
            return category;
        },
    },
};
//# sourceMappingURL=resolvers.js.map