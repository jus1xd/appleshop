import React, {useEffect} from "react";
import s from "./BasketPopup.module.css";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {deleteCartItem} from "../../../store/actions/fetchProducts";
import jwtDecode from "jwt-decode";
import {removeFromLocalCart} from "../../../store/slices/mainSlice";

interface BasketPopup {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function BasketPopup ( {active, setActive}: BasketPopup ) {
    const cartItems = useAppSelector ( ( state ) => state.productsReducer.cart );
    const products = useAppSelector ( ( state ) => state.productsReducer.products );
    const userFromDB = useAppSelector ( ( state ) => state.authReducer.user );
    const dispatch = useAppDispatch ()
    const deleteItemFromPopup = ( productId: string ) => {
        dispatch ( removeFromLocalCart ( productId ) );
        if (userFromDB !== undefined) {
            dispatch (
                deleteCartItem ( {
                    userId: userFromDB.id,
                    productId: productId,
                } )
            );
        }
    }
    const popupItems = products
        .filter ( ( {_id} ) => cartItems.some ( ( product ) => product.id === _id ) )
        .map ( ( product ) => (
            <div key={product._id} className={s.basket_item}>
                <div className={s.item_leftside}>
                    <img src={`http://localhost:5000/${product.picture}`} alt="productIMG"/>
                    <div className={s.item_title}>
                        {product.title}
                    </div>
                </div>
                <div className={s.item_rightside}>
                    <div className={s.item_cost}>{product.price.toLocaleString ( 'ru-RU' )}</div>
                    <img src="../img/header/remove.svg" alt="" onClick={() => deleteItemFromPopup ( product._id )}/>
                </div>
            </div>
        ) );
    return (
        <div
            className={active ? `${s.main_wrapper} ${s.active}` : s.main_wrapper}
            onMouseOver={() => setActive ( true )}
            onMouseOut={() => setActive ( false )}
        >
            <div className={active ? `${s.wrapper} ${s.active}` : s.wrapper}>
                <div className={s.items}>
                    {/* <div className={s.basket_empty}>
            Корзина пуста
          </div> */}
                    {popupItems}
                </div>
                <div className={s.total}>
                    <div className={s.popup_btn}>Купить</div>
                    <div className={s.total_summ}>
                        Итого: <span>{
                        cartItems
                            .map ( ( item ) => item.quantity * item.price! )
                            .reduce ( ( previousValue: number, currentValue: number ) => {
                                return previousValue + currentValue;
                            } ).toLocaleString ( `ru-RU` )}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasketPopup;
