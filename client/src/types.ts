export interface MainReducer {
  products: Product[];
  cart: Product[];
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
