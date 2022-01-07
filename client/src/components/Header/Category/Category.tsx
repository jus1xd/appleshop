import React from "react";
import Link from "next/link";
import Head from "next/head";

import s from "./Category.module.css";

interface ICategory {
  active: boolean,
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

function Category({active, setActive}: ICategory) {
  return (
    <>
      <div className={active? `${s.wrapper} ${s.active}` : s.wrapper} onMouseOver={() => setActive(true)}>
        <div className={s.container}>
          <div className={s.category_inner}>
            <div className={s.column}>
              <div className={s.title}>Категории</div>
              <div className={s.subtitle}>Хиты продаж</div>
              <div className={s.subtitle}>Сравнить</div>
              <div className={s.subtitle}>Избранное</div>
            </div>
            <div className={s.column}>
              <div className={s.title}>iPhone</div>
              <div className={s.subtitle}>iPhone 13 Pro Max</div>
              <div className={s.subtitle}>iPhone 13 Pro</div>
              <div className={s.subtitle}>iPhone 13</div>
              <div className={s.subtitle}>iPhone 13 mini</div>
              <div className={s.subtitle}>iPhone 12</div>
              <div className={s.subtitle}>iPhone 12 mini</div>
              <div className={s.subtitle}>iPhone 11</div>
              <div className={s.subtitle}>iPhone SE</div>
            </div>
            <div className={s.column}>
              <div className={s.title}>Mac</div>
              <div className={s.subtitle}>iMac</div>
              <div className={s.subtitle}>Mac Pro</div>
              <div className={s.subtitle}>Mac mini</div>
              <div className={s.subtitle}>Мониторы</div>
              <div className={s.title}>MacBook</div>
              <div className={s.subtitle}>MacBook Air</div>
              <div className={s.subtitle}>MacBook Pro</div>
            </div>
            <div className={s.column}>
              <div className={s.title}>Watch</div>
              <div className={s.subtitle}>Apple Watch Series 7</div>
              <div className={s.subtitle}>Apple Watch SE</div>
              <div className={s.title}>iPad</div>
              <div className={s.subtitle}>iPad Pro</div>
              <div className={s.subtitle}>iPad Air</div>
              <div className={s.subtitle}>iPad</div>
              <div className={s.subtitle}>iPad mini</div>
            </div>
            <div className={s.column}>
              <div className={s.title}>AirPods</div>
              <div className={s.subtitle}>AirPods (2021)</div>
              <div className={s.subtitle}>AirPods Pro</div>
              <div className={s.subtitle}>AirPods 2</div>
              <div className={s.subtitle}>AirPods Max</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
