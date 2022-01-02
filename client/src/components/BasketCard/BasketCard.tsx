import React from "react";

import s from './BasketCard.module.css'

function BasketCard() {
  return (
    <div className={s.basket_card}>
      <div className={s.basket_leftside}>
        <img src="../img/basket/1.png" alt="" />
        <div className={s.basket_name}>
          <div className={s.basket_product_name}>
            Ноутбук MacBook Air M1 / 8Gb / SSD256Gb / 13.3”
          </div>
          <div className={s.basket_counter}>
            <img src="../img/basket/plus.svg" />
            <div className={s.counter_number}>2</div>
            <img src="../img/basket/minus.svg" />
          </div>
        </div>
      </div>
      <div className={s.basket_cost}>89 991 ₽</div>
    </div>
  );
}

export default BasketCard;
