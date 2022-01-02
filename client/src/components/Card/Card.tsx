import React from "react";

import s from "./Card.module.css";

interface ICard {
  img: number;
  name: string;
  cost: number;
  link: string;
}

function Card({ img, name, cost, link }: ICard) {
  
  let baseImg = "../img/heatsells/";
  name = "Apple MacBook Pro 2020";
  cost = 259991;
  link = "./product";

  return (
    <div className={s.card}>
      <div className={s.card_photo_container}>
        <img src={`${baseImg}${img}.png`} alt="" />
      </div>
      <a href={link} className={s.card_title}>
        {name}
      </a>
      <div className={s.card_cost}>{cost} ₽</div>
      <div className={s.main_btn}>В корзину</div>
    </div>
  );
}

export default Card;
