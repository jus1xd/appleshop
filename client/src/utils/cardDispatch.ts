import {addToCart, changeQuantity} from "../store/actions/fetchProducts";
import {addToLocalCart} from "../store/slices/mainSlice";
import {ICartItem, IUser, Product} from "../types";

export const cardDispatch = ( cart: ICartItem[], product: Product, productId: string, user: IUser | undefined, dispatch: any ) => {
    if (productId && user) {
        cart.every((item) => item.id !== productId)
            ? dispatch(
                addToCart({
                    userId: user?.id,
                    productId: productId,
                    price: product.price,
                })
            )
            : dispatch(
                changeQuantity({
                    userId: user?.id,
                    productId: productId,
                    quantity: cart.find((product) => product.id == productId)!.quantity + 1,
                })
            );
    } else if (productId) {
        dispatch(
            addToLocalCart({
                id: productId,
                quantity: 1,
                price: product.price,
            })
        );
    }
}