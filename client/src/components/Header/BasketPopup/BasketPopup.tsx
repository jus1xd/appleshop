import React from "react";
import Link from "next/link";
import Head from "next/head";

import s from "./BasketPopup.module.css";

interface BasketPopup {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function BasketPopup({ active, setActive }: BasketPopup) {
  return (
    <>
      <div
        className={active ? `${s.main_wrapper} ${s.active}` : s.main_wrapper}
        onMouseOver={() => setActive(true)}
        onMouseOut={() => setActive(false)}
      >
        <div className={active ? `${s.wrapper} ${s.active}` : s.wrapper}>
          <div className={s.items}>
            {/* <div className={s.basket_empty}>
            Корзина пуста
          </div> */}
            <div className={s.basket_item}>
              <div className={s.item_leftside}>
                <img src="../img/heatsells/4.png" alt="" />
                <div className={s.item_title}>
                  Apple iPhone 13, 512ГБ, «красный»
                </div>
              </div>
              <div className={s.item_rightside}>
                <div className={s.item_cost}>79 999 ₽</div>
                <img src="../img/header/remove.svg" alt="" />
              </div>
            </div>
            <div className={s.basket_item}>
              <div className={s.item_leftside}>
                <img src="../img/heatsells/4.png" alt="" />
                <div className={s.item_title}>
                  Apple iPhone 13, 512ГБ, «красный»
                </div>
              </div>
              <div className={s.item_rightside}>
                <div className={s.item_cost}>79 999 ₽</div>
                <img src="../img/header/remove.svg" alt="" />
              </div>
            </div><div className={s.basket_item}>
              <div className={s.item_leftside}>
                <img src="../img/heatsells/4.png" alt="" />
                <div className={s.item_title}>
                  Apple iPhone 13, 512ГБ, «красный»
                </div>
              </div>
              <div className={s.item_rightside}>
                <div className={s.item_cost}>79 999 ₽</div>
                <img src="../img/header/remove.svg" alt="" />
              </div>
            </div><div className={s.basket_item}>
              <div className={s.item_leftside}>
                <img src="../img/heatsells/4.png" alt="" />
                <div className={s.item_title}>
                  Apple iPhone 13, 512ГБ, «красный»
                </div>
              </div>
              <div className={s.item_rightside}>
                <div className={s.item_cost}>79 999 ₽</div>
                <img src="../img/header/remove.svg" alt="" />
              </div>
            </div><div className={s.basket_item}>
              <div className={s.item_leftside}>
                <img src="../img/heatsells/4.png" alt="" />
                <div className={s.item_title}>
                  Apple iPhone 13, 512ГБ, «красный»
                </div>
              </div>
              <div className={s.item_rightside}>
                <div className={s.item_cost}>79 999 ₽</div>
                <img src="../img/header/remove.svg" alt="" />
              </div>
            </div><div className={s.basket_item}>
              <div className={s.item_leftside}>
                <img src="../img/heatsells/4.png" alt="" />
                <div className={s.item_title}>
                  Apple iPhone 13, 512ГБ, «красный»
                </div>
              </div>
              <div className={s.item_rightside}>
                <div className={s.item_cost}>79 999 ₽</div>
                <img src="../img/header/remove.svg" alt="" />
              </div>
            </div>
          </div>
          <div className={s.total}>
            <div className={s.popup_btn}>Купить</div>
            <div className={s.total_summ}>
              Итого: <span>79 999 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasketPopup;
