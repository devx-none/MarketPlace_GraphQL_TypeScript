import { isAuthenticated } from "@middlewares/permission";
import { allow } from "graphql-shield";

const permission = {
  Query: {
    hello: isAuthenticated,
  },
  Mutation: {
    "*": allow,
  },
};

export default permission;
