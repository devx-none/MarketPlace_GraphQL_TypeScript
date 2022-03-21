import { rule } from 'graphql-shield';

export const isAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx, info) => {
    return true;
  }
);

export const isAdmin = rule({ cache: 'contextual' })(
  async (parent, args, ctx, info) => {
    return ctx.user.role === 'admin';
  }
);
