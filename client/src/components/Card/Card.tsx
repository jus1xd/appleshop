import Link from "next/link";
import React from "react";

import s from "./Card.module.css";

interface ICard {
  img: string;
  name: string;
  cost: number;
  id: string;
}

function Card({ img, name, cost, id }: ICard) {
  // let baseImg = "../img/heatsells/";
  // name = "Apple MacBook Pro 2020";
  // cost = 259991;
  // link = "./product";

  return (
    <div className={s.card}>
      <div className={s.card_photo_container}>
        <img src={`http://localhost:5000/${img}`} alt="" />
      </div>
      <Link href={`./products/${id}`}>
        <a className={s.card_title}>{name}</a>
      </Link>
      <div className={s.card_cost}>{cost} ₽</div>
      <div className={s.main_btn}>В корзину</div>
    </div>
  );
}

export default Card;
