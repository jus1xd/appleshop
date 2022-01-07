export interface MainReducer {
    products: Product[];
    cart: ICartItem[];
    isLoading: boolean;
    error: string;
}

export interface AuthReducer {
    user: {};
    isAuth: boolean;
    isLoading: boolean;
    error: string;
}

export interface AuthResponse {
  accessToken: string,
  refreshToken: string,
}

export interface IUser {
  accessToken: string,
  refreshToken: string,
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
    id: string
    quantity: number
}
export interface IUser {
    refreshToken : string
    accessToken : string
}
