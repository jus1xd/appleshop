import Link from "next/link";
import React from "react";
import Header from "../components/Header/Header";

import s from "../styles/Auth.module.css";

function login() {
  return (
    <>
      <Header />
      <div className={s.log}>
        <div className={s.container}>
          <div className={s.log_inner}>
            <div className={s.section_title}>Авторизация</div>
            <div className={s.register}>
              <div className={s.title_log}>Войдите в систему</div>
              <input
                className={s.reg}
                type="text"
                placeholder="Введите email..."
              />
              <input
                className={s.reg}
                type="text"
                placeholder="Введите пароль..."
              />
              <div className={s.button}>
                <a href="#">Войти</a>
              </div>
              <div className={s.check_box}>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">Запомнить меня</label>
              </div>
              <div className={s.benefis_title}></div>
              <div className={s.idk_pass}>
                <Link href="#">
                  <a>Забыли почту или пароль?</a>
                </Link>
              </div>
              <div className={s.create_new_acc}>
                Нет аккаунта?
                <Link href="/register">
                  <a> Создайте его сейчас</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;