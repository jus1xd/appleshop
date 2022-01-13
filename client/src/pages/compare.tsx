import React from "react";
import Header from "../components/Header/Header";
import s from "../styles/Compare.module.css";

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
