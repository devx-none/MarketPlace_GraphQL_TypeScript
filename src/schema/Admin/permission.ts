import { isAdmin, isAuthenticated } from "@middlewares/permission";
import { and } from "graphql-shield";

const permission = {
  Query: {
    admin: and(isAdmin, isAuthenticated),
  },
};

export default permission;
