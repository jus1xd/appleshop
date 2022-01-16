import React from "react";
import s from "./BasketCard.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {
    changeQuantity,
    deleteCartItem,
} from "../../store/actions/fetchProducts";
import {ICartItems} from "../../types";
import {
    changeLocalQuantity,
    removeFromLocalCart,
} from "../../store/slices/mainSlice";

function BasketCard ( {img, name, cost, id}: ICartItems ) {
    const cart = useAppSelector ( ( state ) => state.productsReducer.cart );
    const dispatch = useAppDispatch ();
    const userFromDB = useAppSelector ( ( state ) => state.authReducer.user );
    const quantity = cart?.find ( ( e ) => e.id == id )?.quantity;
    const setQuantity = ( quantity: number, productId: string ) => {
        if (productId && quantity >= 1 && Object.keys ( userFromDB! ).length !== 0) {
            dispatch (
                changeQuantity ( {
                    userId: userFromDB?.id,
                    productId: productId,
                    quantity: quantity,
                } )
            );
        } else if (productId && quantity >= 1) {
            dispatch (
                changeLocalQuantity ( {
                    id: productId,
                    quantity: quantity,
                } )
            );
        } else if (productId && quantity == 0) {
            dispatch ( removeFromLocalCart ( productId ) );
            if (Object.keys ( userFromDB! ).length == 0) {
                dispatch (
                    deleteCartItem ( {
                        userId: userFromDB?.id,
                        productId: productId,
                    } )
                );
            }
        }
    };
    const onMinusHandler = ( quantity: number | undefined, productId: string | undefined ) => {
        if (quantity && productId) {
            setQuantity ( quantity - 1, productId );
        }
    };
    const onPlusHandler = ( quantity: number | undefined, productId: string | undefined ) => {
        if (quantity && productId) {
            setQuantity ( quantity + 1, productId );
        }
    };
    return (
        <div className={s.basket_card}>
            <div className={s.basket_leftside}>
                <div className={s.basket_photo_container}>
                    <img
                        className={s.basket_photo}
                        src={`http://localhost:5000/${img}`}
                        alt="productPhoto"
                    />
                </div>
                <div className={s.basket_name}>
                    <div className={s.basket_product_name}>{name}</div>
                    <div className={s.basket_counter}>
                        <img
                            onClick={() =>
                                onPlusHandler ( quantity, cart?.find ( ( e ) => e.id == id )?.id )
                            }
                            src="../img/basket/plus.svg"
                        />
                        <div className={s.counter_number}>{quantity}</div>
                        <img
                            src="../img/basket/minus.svg"
                            onClick={() =>
                                onMinusHandler ( quantity, cart?.find ( ( e ) => e.id == id )?.id )
                            }
                        />
                    </div>
                </div>
            </div>
            <div className={s.basket_cost}>{cost.toLocaleString ( 'ru-RU' )} ₽</div>
        </div>
    );
}

export default BasketCard;
