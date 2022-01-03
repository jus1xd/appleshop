import React from "react";

import s from "./BasketCard.module.css";

interface ICartItem {
  img: string;
  name: string;
  cost: number;
}

function BasketCard({ img, name, cost }: ICartItem) {
  return (
    <div className={s.basket_card}>
      <div className={s.basket_leftside}>
        <div className={s.basket_photo_container}>
          <img
            className={s.basket_photo}
            src={`http://localhost:5000/${img}`}
            alt=""
          />
        </div>
        <div className={s.basket_name}>
          <div className={s.basket_product_name}>{name}</div>
          <div className={s.basket_counter}>
            <img src="../img/basket/plus.svg" />
            <div className={s.counter_number}>2</div>
            <img src="../img/basket/minus.svg" />
          </div>
        </div>
      </div>
      <div className={s.basket_cost}>{cost} ₽</div>
    </div>
  );
}

export default BasketCard;
