"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const pagination_1 = __importDefault(require("../../lib/pagination"));
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        stores: async (parent, { input }) => {
            const { limit, cursor } = input;
            const stores = await (0, pagination_1.default)(limit, cursor, index_1.Store);
            return stores;
        },
        store: async (parent, args) => {
            const store = await index_1.Store.findById(args.id);
            return store;
        },
    },
    Mutation: {
        createStore: async (_, { name, thumbnail }) => {
            const store = await index_1.Store.create({ name, thumbnail });
            return store;
        },
        deleteStore: async (_, { id }) => {
            const store = await index_1.Store.findByIdAndDelete(id);
            return store;
        },
    },
};
//# sourceMappingURL=resolvers.js.map