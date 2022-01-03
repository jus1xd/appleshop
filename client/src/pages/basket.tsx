import React from "react";
import BasketCard from "../components/BasketCard/BasketCard";
import Header from "../components/Header/Header";
import { useAppSelector } from "../hooks/redux";

import s from "../styles/Basket.module.css";

const Basket = () => {
  const data = useAppSelector((state) => state.productsReducer.cart); 

  const basketItems = data.map((product) => (
    <BasketCard
      img={product.picture}
      name={product.title}
      cost={product.price}
      key={product._id}
    />
  ));

  return (
    <>
      <Header />

      <section className={s.basket}>
        <div className={s.container}>
          <div className={s.section_title}>Корзина</div>
          <div className={s.basket_inner}>
            <div className={s.basket_cards}>{basketItems.length > 0 ? basketItems : 'Корзина пуста'}</div>

            <div className={s.payment}>
              <div className={s.payment_title}>Оформить заказ</div>
              <div className={s.inputs}>
                <input
                  type="text"
                  className={s.main_input} 
                  placeholder="Имя.."
                />
                <input
                  type="text"
                  className={s.main_input}
                  placeholder="Телефон.."
                />
                <input
                  type="text"
                  className={s.main_input}
                  placeholder="Адрес.."
                />
              </div>
              <div className={s.payment_subtitle}>Способ оплаты</div>
              <div className={s.payment_items}>
                <div className={s.p_item}>
                  <img src="../img/basket/payment/1.svg" alt="" />
                </div>
                <div className={s.p_item}>
                  <img src="../img/basket/payment/2.svg" alt="" />
                </div>
                <div className={s.p_item}>
                  <img src="../img/basket/payment/3.svg" alt="" />
                </div>
                <div className={s.p_item}>
                  <img src="../img/basket/payment/4.svg" alt="" />
                </div>
              </div>
              <div className={s.payment_total}>
                <div className={s.payment_subtitle}>Итого:</div>
                <div className={s.total}>89 991 ₽</div>
              </div>
              <div className={s.main_btn}>Перейти к оплате</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Basket;
