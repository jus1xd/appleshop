import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAllProducts, getUserCart } from "../store/actions/fetchProducts";
import jwtDecode from "jwt-decode";
import Card from "../components/Card/Card";

import s from "../styles/Compare.module.css";
import { refresh } from "../store/actions/auth";

const Compare = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.productsReducer.products);
  const userFromDB = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(fetchAllProducts());
    userFromDB.isAuth ? dispatch(refresh()) : "";
  }, []);

  const cards = products.map((product) => (
    <Card
      user={userFromDB.user}
      key={product._id}
      product={product}
      compare={true}
    />
  ));

  return (
    <>
      <Header />
      <div className={s.compare}>
        <div className={s.container}>
          <div className={s.section_inner}>
            <div className={s.section_header}>
              <div className={s.section_title}>Сравнить</div>
              <div className={s.compare_btn}>Показать различия</div>
            </div>

            {cards ? (
              <>
                <div className={s.cards_wrapper}>
                  <div className={s.product_cards}>{cards.slice(0, 3)}</div>
                </div>
                <div className={s.specs}>
                  <div className={s.global_spec}>Основные характеристики</div>
                  <div className={s.sub_spec}>
                    <div className={s.spec_name}>Серия</div>
                    <div className={s.spec_values}>
                      <div className={s.spec_value}>iPhone 12</div>
                      <div className={s.spec_value}>iPhone 12</div>
                      <div className={s.spec_value}>iPhone 12</div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className={s.error_wrapper}>
                <div className={s.error_icon}>(o^^)o</div>
                <div className={s.error_title}>Нечего сравнивать</div>
                <div className={s.error_subtitle}>
                  Чтобы добавить товары в сравнение, кликните на кнопку
                  “Сравнить” у товара
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Compare;
