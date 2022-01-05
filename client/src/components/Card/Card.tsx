import Link from "next/link";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addToCart } from "../../store/slices/mainSlice";
import axios from "axios";

import s from "./Card.module.css";

interface ICard {
  img: string;
  name: string;
  cost: number;
  id: string;
}

function Card({ img, name, cost, id }: ICard) {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.productsReducer.products);

  let url = "http://localhost:5000/cart/products/";

  const addToCartHandler = (id: string) => {
    const cartItem = data.find((product) => product._id === id);

    if (cartItem) {
      dispatch(addToCart(cartItem));

      // let formdata = new FormData();

      // let price = cartItem.price.toString()

      // formdata.append("title", cartItem.title);
      // formdata.append("price", price);
      // formdata.append("picture", cartItem.picture);

      // console.log(formdata);

      // // let data = {
      // //     title: cartItem.title,
      // //     price: cartItem.price,
      // //     picture: formdata,
      // // };

      // axios.post(url, (formdata), {
      //   headers: {'Content-Type': 'multipart/form-data'}
      // }).catch((e) => console.log(e.response));
    }
  };

  return (
    <div className={s.card}>
      <div className={s.card_photo_container}>
        <img src={`http://localhost:5000/${img}`} alt="" />
      </div>
      <Link href={`./products/${id}`}>
        <a className={s.card_title}>{name}</a>
      </Link>
      <div className={s.card_cost}>{cost} ₽</div>
      <div className={s.main_btn} onClick={() => addToCartHandler(id)}>
        В корзину
      </div>
    </div>
  );
}

export default Card;
