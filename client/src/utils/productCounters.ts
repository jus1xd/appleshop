import {CartProduct} from "../types";

export const productCounters = ( cartItems: CartProduct[], setProductCount: any, setPriceCount: any ) => {
    if (cartItems.length != 0) {
        setProductCount (
            cartItems
                .map ( ( item ) => item.quantity )
                .reduce ( ( previousValue: number, currentValue: number ) => {
                    return previousValue + currentValue;
                } )
        );
        setPriceCount (
            cartItems
                .map ( ( item ) => item.quantity * item.price! )
                .reduce ( ( previousValue: number, currentValue: number ) => {
                    return previousValue + currentValue;
                } )
        );
    } else {
        setProductCount ( 0 ), setPriceCount ( 0 );
    }
}
