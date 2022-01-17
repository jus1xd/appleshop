export interface MainReducer {
  products: Product[];
  cart: ICartItem[];
  isLoading: boolean;
  error: string;
}
export interface IUser {
  refreshToken: string;
  accessToken: string;
  id: string;
  username: string;
  role: string;
}
export interface IData {
  cart?: ICartItem[];
  username?: string;
  email: string;
  password: string;
}
export interface AuthReducer {
  user?: IUser;
  isAuth: boolean;
  isLoading: boolean;
  error: string;
}
export interface CompareReducer {
  //   compare: ICompareItem;
  isLoading: boolean;
  error: string;
}
export interface Product {
  title: string;
  subTitle: string;
  price: number;
  _id: string;
  picture: string;
  quantity: number;
  isLoading?: boolean;
  error?: string;
}

export interface ICartItem {
  id: string;
  price?: number;
  quantity: number;
}
export interface ICompareItem {
  img: string;
  name: string;
  cost: number;
  id: string;
}
export interface ICartItems {
  img: string;
  name: string;
  cost: number;
  id: string;
}
