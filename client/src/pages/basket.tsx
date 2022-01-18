import React, { useEffect, useState } from "react";
import BasketCard from "../components/BasketCard/BasketCard";
import Header from "../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAllProducts, getUserCart } from "../store/actions/fetchProducts";
import s from "../styles/Basket.module.css";
import { productCounters } from "../utils/productCounters";
import { BasketModal } from "../components/Modal/BasketModal/BasketModal";

const Basket = () => {
  const dispatch = useAppDispatch();
  const userFromDB = useAppSelector((state) => state.authReducer.user);
  const cartItems = useAppSelector((state) => state.productsReducer.cart);
  const products = useAppSelector((state) => state.productsReducer.products);
  const [productCount, setProductCount] = useState<number>(0);
  const [priceCount, setPriceCount] = useState<number>(0);
  const [modalActive, setModalActive] = useState<boolean>(false);
  useEffect(() => {
    if (userFromDB) {
      if (products.length === 0) {
        dispatch(fetchAllProducts());
      }
      dispatch(getUserCart(userFromDB?.id));
    }
  }, []);
  useEffect(() => {
    productCounters(cartItems, setProductCount, setPriceCount);
  }, [cartItems]);
  const basketItems = products
    .filter(({ _id }) => cartItems.some((product) => product._id === _id))
    .map((product) => (
      <BasketCard
        img={product.picture}
        name={product.title}
        cost={product.price}
        id={product._id}
        key={product._id}
      />
    ));

  return (
    <>
      <Header />
      <section className={s.basket}>
        <div className={s.container}>
          <div className={s.section_title}>Корзина</div>
          {basketItems.length > 0 ? (
            <div className={s.basket_inner}>
              <div className={s.basket_cards}>{basketItems}</div>
              <div className={s.payment}>
                <div className={s.payment_title}>Оформить заказ</div>
                <div className={s.payment_subtitle_text}>
                  Вы можете оплатить заказ на сайте или при получении товара у
                  курьера.
                </div>
                <div className={s.payment_values}>
                  <div className={s.payment_total}>
                    <div className={s.payment_subtitle}>Кол - во :</div>
                    <div className={s.total}>{productCount}</div>
                  </div>
                  <div className={s.payment_total}>
                    <div className={s.payment_subtitle}>Итого:</div>
                    <div className={s.total}>
                      {priceCount.toLocaleString("ru-RU")}₽
                    </div>
                  </div>
                </div>
                <div
                  className={s.main_btn}
                  onClick={() => setModalActive(true)}
                >
                  Перейти к оплате
                </div>
              </div>
            </div>
          ) : (
            <div className={s.error_wrapper}>
              <div className={s.error_icon}>( o ^ ^ ) o</div>
              <div className={s.error_title}>Корзина пуста</div>
              <div className={s.error_subtitle}>
                Чтобы добавить товары в корзину, кликните на кнопку “В корзину”
                у товара
              </div>
            </div>
          )}
        </div>
      </section>
      <BasketModal modalActive={modalActive} setModalActive={setModalActive} />
    </>
  );
};

export default Basket;
