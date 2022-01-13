import Link from "next/link";
import React, {useEffect, useState} from "react";
import s from "./Card.module.css";
import {Product} from "../../types";
import {cardDispatch} from "../../utils/cardDispatch";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

interface ICard {
    product: Product;
    user?: any;
    key: string;
}

function Card ( {product, user}: ICard ) {
    const [productId, setProductId] = useState<string> ( "" );
    const cart = useAppSelector ( ( state ) => state.productsReducer.cart );
    const dispatch = useAppDispatch ()
    useEffect ( () => {
        if (product) {
            cardDispatch ( cart, product, productId, user, dispatch )
        }
    }, [productId] );
    return (
        <div className={s.card}>
            <Link href={`./products/${product._id}`}>
                <div className={s.card_photo_container}>
                    <img src={`http://localhost:5000/${product.picture}`} alt=""/>
                </div>
            </Link>
            <Link href={`./products/${product._id}`}>
                <a className={s.card_title}>{product.title}</a>
            </Link>
            <div className={s.card_cost}>
                {product.price.toLocaleString ( 'ru-RU' )} ₽
            </div>
            <div className={s.card_btns}>
                <div className={s.main_btn} onClick={() => setProductId ( product._id )}>
                    В корзину
                </div>
                {" "}
                <div className={`${s.main_btn} ${s.icon_btn}`}>
                    <img src="../img/header/favorite.svg" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Card;
