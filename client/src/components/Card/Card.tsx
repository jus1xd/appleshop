import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import axios from "axios";
import s from "./Card.module.css";
import {Product} from "../../types";
import {addToCart} from "../../store/actions/fetchProducts";

interface ICard {
    card: Product
    key: string
}

function Card ( {card}: ICard ) {
    const [productId, setProductId] = useState<String> ( '' )
    const idForAddToCart = {
        userId: "61d6f7640be09ca8afef5a95",
        productId: productId
    }
    const dispatch = useAppDispatch ();
    useEffect ( () => {
        if (productId) {
            dispatch ( addToCart ( idForAddToCart ) )
        }
    }, [productId] );
    return (
        <div className={s.card}>
            <div className={s.card_photo_container}>
                <img src={`http://localhost:5000/${card.picture}`} alt=""/>
            </div>
            <Link href={`./products/${card._id}`}>
                <a className={s.card_title}>{card.title}</a>
            </Link>
            <div className={s.card_cost}>{card.price} ₽</div>
            <div className={s.main_btn} onClick={() => setProductId ( card._id )}>
                В корзину
            </div>
        </div>
    );
}

export default Card;
