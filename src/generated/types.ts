import { Role } from '../ts/enums';
import { StoreStatus } from '../ts/enums';
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../config/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Brand = {
  __typename?: 'Brand';
  id: Scalars['ID'];
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};

export type Cart = {
  __typename?: 'Cart';
  amount: Scalars['Float'];
  id: Scalars['ID'];
  products: Array<Maybe<Product>>;
  user: Scalars['String'];
};

export type CartInput = {
  cartId: Scalars['ID'];
  user: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};

export type Dimensions = {
  __typename?: 'Dimensions';
  color?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
};

export type DimensionsInput = {
  color?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  files?: InputMaybe<Array<Scalars['Upload']>>;
};

export type Image = {
  __typename?: 'Image';
  alt: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  src: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  Login?: Maybe<UserLogin>;
  addImage?: Maybe<Array<Image>>;
  addOrderByCart: Order;
  addProductInCart: Cart;
  addSuper: Super;
  createBrand: Brand;
  createCategory: Category;
  createProduct: Product;
  createStore: Store;
  deleteBrand?: Maybe<Brand>;
  deleteCategory?: Maybe<Category>;
  deleteStore?: Maybe<Store>;
  register: User;
  updateProductInCart: Cart;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationAddImageArgs = {
  input?: InputMaybe<FileInput>;
};


export type MutationAddOrderByCartArgs = {
  input: OrderInput;
};


export type MutationAddProductInCartArgs = {
  input: CartInput;
};


export type MutationAddSuperArgs = {
  input?: InputMaybe<SuperInput>;
};


export type MutationCreateBrandArgs = {
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};


export type MutationCreateProductArgs = {
  input: ProductInput;
};


export type MutationCreateStoreArgs = {
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};


export type MutationDeleteBrandArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStoreArgs = {
  id: Scalars['ID'];
};


export type MutationRegisterArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateProductInCartArgs = {
  input: CartInput;
};

export type Order = {
  __typename?: 'Order';
  address: Scalars['String'];
  cartId?: Maybe<Cart>;
  city: Scalars['String'];
  country: Scalars['String'];
  delivery: Scalars['String'];
  estimatedTime: Scalars['String'];
  id: Scalars['ID'];
  products?: Maybe<Product>;
  status: Scalars['String'];
  traking: Scalars['String'];
  user: Scalars['String'];
  zipCode: Scalars['Int'];
};

export type OrderInput = {
  address: Scalars['String'];
  cartId: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  delivery: Scalars['String'];
  estimatedTime: Scalars['String'];
  status: Scalars['String'];
  traking: Scalars['String'];
  user: Scalars['String'];
  zipCode: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  nextCursor?: Maybe<Scalars['String']>;
};

export type PaginateStore = {
  __typename?: 'PaginateStore';
  data: Array<Store>;
  pageInfo: PageInfo;
};

export type Product = {
  __typename?: 'Product';
  brand: Brand;
  category: Category;
  description: Scalars['String'];
  discount: Scalars['Float'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  stock: Scalars['Int'];
  store: Store;
  thumbnails: Array<Maybe<Scalars['String']>>;
  variants: Array<Maybe<Variants>>;
};

export type ProductInput = {
  brand: Scalars['ID'];
  category: Array<InputMaybe<Scalars['ID']>>;
  description: Scalars['String'];
  discount: Scalars['Float'];
  name: Scalars['String'];
  price: Scalars['Float'];
  store: Scalars['ID'];
  thumbnails: Array<InputMaybe<Scalars['String']>>;
  variants: Array<InputMaybe<VariantsInput>>;
};

export type Query = {
  __typename?: 'Query';
  admin?: Maybe<Scalars['String']>;
  cart?: Maybe<Cart>;
  carts?: Maybe<Array<Maybe<Cart>>>;
  getAll?: Maybe<Array<Super>>;
  getAllUsers?: Maybe<Array<User>>;
  hello?: Maybe<Scalars['String']>;
  orders?: Maybe<Order>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  store?: Maybe<Store>;
  stores?: Maybe<PaginateStore>;
  user?: Maybe<Scalars['String']>;
};


export type QueryCartArgs = {
  id: Scalars['String'];
};


export type QueryOrdersArgs = {
  user: Scalars['String'];
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryStoreArgs = {
  id: Scalars['String'];
};


export type QueryStoresArgs = {
  input?: InputMaybe<Paginate>;
};

export { Role };

export type Store = {
  __typename?: 'Store';
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: User;
  products: Array<Maybe<Product>>;
  status: StoreStatus;
  thumbnail: Scalars['String'];
};

export { StoreStatus };

export type Super = {
  __typename?: 'Super';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SuperInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  role: Role;
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  role: Role;
};

export type UserLogin = {
  __typename?: 'UserLogin';
  accessToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Variants = {
  __typename?: 'Variants';
  dimensions: Array<Maybe<Dimensions>>;
  price: Scalars['Float'];
  sku: Scalars['String'];
  stock: Scalars['Int'];
};

export type VariantsInput = {
  dimensions: Array<InputMaybe<DimensionsInput>>;
  price: Scalars['Float'];
  sku: Scalars['String'];
  stock: Scalars['Int'];
};

export type Paginate = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Brand: ResolverTypeWrapper<Brand>;
  Cart: ResolverTypeWrapper<Cart>;
  CartInput: CartInput;
  Category: ResolverTypeWrapper<Category>;
  Dimensions: ResolverTypeWrapper<Dimensions>;
  DimensionsInput: DimensionsInput;
  FileInput: FileInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Image: ResolverTypeWrapper<Image>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Order: ResolverTypeWrapper<Order>;
  OrderInput: OrderInput;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PaginateStore: ResolverTypeWrapper<PaginateStore>;
  Product: ResolverTypeWrapper<Product>;
  ProductInput: ProductInput;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  Store: ResolverTypeWrapper<Store>;
  StoreStatus: StoreStatus;
  String: ResolverTypeWrapper<Scalars['String']>;
  Super: ResolverTypeWrapper<Super>;
  SuperInput: SuperInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  UserLogin: ResolverTypeWrapper<UserLogin>;
  Variants: ResolverTypeWrapper<Variants>;
  VariantsInput: VariantsInput;
  paginate: Paginate;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Brand: Brand;
  Cart: Cart;
  CartInput: CartInput;
  Category: Category;
  Dimensions: Dimensions;
  DimensionsInput: DimensionsInput;
  FileInput: FileInput;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Image: Image;
  Int: Scalars['Int'];
  Mutation: {};
  Order: Order;
  OrderInput: OrderInput;
  PageInfo: PageInfo;
  PaginateStore: PaginateStore;
  Product: Product;
  ProductInput: ProductInput;
  Query: {};
  Store: Store;
  String: Scalars['String'];
  Super: Super;
  SuperInput: SuperInput;
  Upload: Scalars['Upload'];
  User: User;
  UserInput: UserInput;
  UserLogin: UserLogin;
  Variants: Variants;
  VariantsInput: VariantsInput;
  paginate: Paginate;
};

export type BrandResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Brand'] = ResolversParentTypes['Brand']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DimensionsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Dimensions'] = ResolversParentTypes['Dimensions']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  alt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  Login?: Resolver<Maybe<ResolversTypes['UserLogin']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  addImage?: Resolver<Maybe<Array<ResolversTypes['Image']>>, ParentType, ContextType, Partial<MutationAddImageArgs>>;
  addOrderByCart?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationAddOrderByCartArgs, 'input'>>;
  addProductInCart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType, RequireFields<MutationAddProductInCartArgs, 'input'>>;
  addSuper?: Resolver<ResolversTypes['Super'], ParentType, ContextType, Partial<MutationAddSuperArgs>>;
  createBrand?: Resolver<ResolversTypes['Brand'], ParentType, ContextType, RequireFields<MutationCreateBrandArgs, 'name' | 'thumbnail'>>;
  createCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'description' | 'name' | 'thumbnail'>>;
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  createStore?: Resolver<ResolversTypes['Store'], ParentType, ContextType, RequireFields<MutationCreateStoreArgs, 'name' | 'thumbnail'>>;
  deleteBrand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<MutationDeleteBrandArgs, 'id'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>;
  deleteStore?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<MutationDeleteStoreArgs, 'id'>>;
  register?: Resolver<ResolversTypes['User'], ParentType, ContextType, Partial<MutationRegisterArgs>>;
  updateProductInCart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType, RequireFields<MutationUpdateProductInCartArgs, 'input'>>;
};

export type OrderResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cartId?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  delivery?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  estimatedTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  traking?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginateStoreResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PaginateStore'] = ResolversParentTypes['PaginateStore']> = {
  data?: Resolver<Array<ResolversTypes['Store']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  brand?: Resolver<ResolversTypes['Brand'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType>;
  thumbnails?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  variants?: Resolver<Array<Maybe<ResolversTypes['Variants']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  admin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartArgs, 'id'>>;
  carts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cart']>>>, ParentType, ContextType>;
  getAll?: Resolver<Maybe<Array<ResolversTypes['Super']>>, ParentType, ContextType>;
  getAllUsers?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orders?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrdersArgs, 'user'>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  store?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<QueryStoreArgs, 'id'>>;
  stores?: Resolver<Maybe<ResolversTypes['PaginateStore']>, ParentType, ContextType, Partial<QueryStoresArgs>>;
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type RoleResolvers = EnumResolverSignature<{ SELLER?: any, USER?: any }, ResolversTypes['Role']>;

export type StoreResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Store'] = ResolversParentTypes['Store']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['StoreStatus'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreStatusResolvers = EnumResolverSignature<{ ACTIVE?: any, INACTIVE?: any }, ResolversTypes['StoreStatus']>;

export type SuperResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Super'] = ResolversParentTypes['Super']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserLoginResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserLogin'] = ResolversParentTypes['UserLogin']> = {
  accessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariantsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Variants'] = ResolversParentTypes['Variants']> = {
  dimensions?: Resolver<Array<Maybe<ResolversTypes['Dimensions']>>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Brand?: BrandResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Dimensions?: DimensionsResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PaginateStore?: PaginateStoreResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Role?: RoleResolvers;
  Store?: StoreResolvers<ContextType>;
  StoreStatus?: StoreStatusResolvers;
  Super?: SuperResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserLogin?: UserLoginResolvers<ContextType>;
  Variants?: VariantsResolvers<ContextType>;
};

