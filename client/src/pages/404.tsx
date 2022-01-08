import React from "react";

import Header from "../components/Header/Header";

import s from "../styles/404.module.css";

const Error = () => {
  return (
    <>
      <Header />
      <div className={s.error_page}>
        <div className={s.container}>
          <div className={s.section_inner}>
            <div className={s.section_title}>Ошибка</div>
            <div className={s.error_wrapper}>
              <div className={s.error_icon}>404</div>
              <div className={s.error_title}>
                Упс.. Такой страницы не найдено
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
