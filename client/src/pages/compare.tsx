<<<<<<< HEAD
import React from "react";
import Header from "../components/Header/Header";
import s from "../styles/Compare.module.css";
=======
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import s from "../styles/Compare.module.css";
import { getUserCart } from "../store/actions/fetchProducts";
import jwtDecode from "jwt-decode";
import CompareCard from "../components/CompareCard/CompareCard";
>>>>>>> 8f30e758de4c1c0cb181588613febdc92cf9b064

const Compare = () => {

  const dispatch = useAppDispatch();


  return (
    <>
      <Header />
      <div className={s.compare}>
        <div className={s.container}>
          <div className={s.section_inner}>
            <div className={s.section_header}>
              <div className={s.section_title}>Сравнить</div>
              {/* <div className={s.compare_btn}>Показать различия</div> */}
            </div>
            {/* <div className={s.product_cards}>
              <CompareCard  />
            </div> */}

            <div className={s.error_wrapper}>
              <div className={s.error_icon}>(o^^)o</div>
              <div className={s.error_title}>Нечего сравнивать</div>
              <div className={s.error_subtitle}>
                Чтобы добавить товары в сравнение, кликните на кнопку “Сравнить”
                у товара
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compare;
