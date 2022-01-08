import React, {useState} from "react";
import s from "./BasketCard.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import jwtDecode from "jwt-decode";
import {changeQuantity, getUserCart} from "../../store/actions/fetchProducts";
import {ICartItems} from "../../types";

function BasketCard ( {img, name, cost, id}: ICartItems ) {
    const userFromDB = useAppSelector ( state => state.authReducer.user )
    const cart = useAppSelector ( state => state.productsReducer.cart )
    const dispatch = useAppDispatch ()
    const quantity = cart?.find ( e => e.id == id )?.quantity
    const setQuantity = ( quantity: number, productId: string ) => {
        if (productId && quantity >= 1) {
            const setServerQuantity = {
                // @ts-ignore
                userId: jwtDecode ( `${userFromDB?.accessToken}` ).id,
                productId: productId,
                quantity: quantity
            }
            dispatch ( changeQuantity ( setServerQuantity ) )
        }
    }
    const onMinusHandler = ( quantity: number | undefined, productId: string | undefined ) => {
        if (quantity && productId) {
            console.log (productId)
            setQuantity ( quantity - 1, productId )
        }
    }
    const onPlusHandler = ( quantity: number | undefined, productId: string | undefined ) => {
        if (quantity && productId) {
            setQuantity ( quantity + 1, productId )
        }
    }
    return (
        <div className={s.basket_card}>
            <div className={s.basket_leftside}>
                <div className={s.basket_photo_container}>
                    <img className={s.basket_photo} src={`http://localhost:5000/${img}`} alt="productPhoto"/>
                </div>
                <div className={s.basket_name}>
                    <div className={s.basket_product_name}>{name}</div>
                    <div className={s.basket_counter}>
                        <img onClick={() => onPlusHandler ( quantity, cart?.find ( e => e.id == id )?.id )}
                             src="../img/basket/plus.svg"/>
                        <div className={s.counter_number}>{quantity}</div>
                        <div onClick={() => onMinusHandler ( quantity, cart?.find ( e => e.id == id )?.id )}>
                            <img src="../img/basket/minus.svg"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.basket_cost}>{cost} ₽</div>
        </div>
    );
}

export default BasketCard;
