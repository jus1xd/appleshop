import React, { useEffect, useState } from "react";
import BasketCard from "../components/BasketCard/BasketCard";
import DateItem from "../components/DateItem/DateItem";
import TimeItem from "../components/TimeItem/TimeItem";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import s from "../styles/Favorite.module.css";
import { getUserCart } from "../store/actions/fetchProducts";
import jwtDecode from "jwt-decode";

const Favorite = () => {
  return (
    <>
      <Header />
      <div className={s.favorite}>
        <div className={s.container}>
          <div className={s.section_inner}>
            <div className={s.section_title}>Избранное</div>
            <div className={s.error_wrapper}>
              <div className={s.error_icon}>(o^^)o</div>
              <div className={s.error_title}>Избранных товаров нет</div>
              <div className={s.error_subtitle}>
                Чтобы добавить товары в избранное, кликните на кнопку
                “Избранное” у товара
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorite;
