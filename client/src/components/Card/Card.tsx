import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import s from "./Card.module.css";
import {IUser, Product} from "../../types";
import {addToCart} from "../../store/actions/fetchProducts";
import jwtDecode from "jwt-decode";

interface ICard {
    card: Product;
    user: IUser;
    key: string;
}

function Card ( {card, user}: ICard ) {
    const [productId, setProductId] = useState<String> ( "" );
    const idForAddToCart = {
        //@ts-ignore
        userId: jwtDecode ( `${user.accessToken}` ).id,
        productId: productId,
    };
    const dispatch = useAppDispatch ();
    useEffect ( () => {
        if (productId && user) {
            dispatch (
                addToCart ( {
                    //@ts-ignore
                    userId: jwtDecode ( `${user.accessToken}` ).id,
                    productId: productId,
                } )
            );
        }
    }, [productId] );

    return (
        <div className={s.card}>
            <Link href={`./products/${card._id}`}>
                <div className={s.card_photo_container}>
                    <img src={`http://localhost:5000/${card.picture}`} alt=""/>
                </div>
            </Link>
            <Link href={`./products/${card._id}`}>
                <a className={s.card_title}>{card.title}</a>
            </Link>
            <div className={s.card_cost}>{card.price} ₽</div>
            <div className={s.card_btns}>
                <div className={s.main_btn} onClick={() => setProductId ( card._id )}>
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
