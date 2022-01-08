import React, { useEffect, useState } from "react";
import BasketCard from "../components/BasketCard/BasketCard";
import DateItem from "../components/DateItem/DateItem";
import TimeItem from "../components/TimeItem/TimeItem";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import s from "../styles/Compare.module.css";
import { getUserCart } from "../store/actions/fetchProducts";
import jwtDecode from "jwt-decode";

const Compare = () => {
  return (
    <>
      <Header />
      <div className={s.compare}>
        <div className={s.container}>
          <div className={s.section_inner}>
            <div className={s.section_title}>Сравнить</div>
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
