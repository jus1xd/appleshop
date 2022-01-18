import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAllProducts } from "../store/actions/fetchProducts";
import Card from "../components/Card/Card";

import s from "../styles/Compare.module.css";

const Compare = () => {
  const dispatch = useAppDispatch();
  const userFromDB = useAppSelector((state) => state.authReducer);
  const compareItems = useAppSelector((state) => state.compareReducer.compareItems)

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);


  const cards = compareItems.map((product) => (
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

            {cards.length > 0 ? (
              <>
                <div className={s.cards_wrapper}>
                  <div className={s.product_cards}>{cards}</div>
                </div>
                <div className={s.specs}>
                  <div className={s.global_spec}>Основные характеристики</div>
                  <div className={s.sub_spec}>
                    <div className={s.spec_name}>Серия</div>
                    <div className={s.spec_values}>
                      {compareItems.map(el => <div className={s.spec_value}>{el.title.slice(6, 15)}</div>)}
                    </div>
                  </div>
                  <div className={s.sub_spec}>
                    <div className={s.spec_name}>Память</div>
                    <div className={s.spec_values}>
                    {compareItems.map(el => <div className={s.spec_value}>{el.specifications.memory}</div>)}
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
