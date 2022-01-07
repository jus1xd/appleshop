import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import { useAppDispatch } from "../hooks/redux";
import { login } from "../store/actions/auth";
import s from "../styles/Auth.module.css";

type TUser = {
  email: string;
  password: string;
};

function loginPage() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const user: TUser = {
    email: userEmail,
    password: userPassword,
  };

  const loginHandler = async (user: TUser) => {
    dispatch(login(user));
    console.log(user);
  };

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
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
              />
              <input
                className={s.reg}
                type="password"
                placeholder="Введите пароль..."
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
              />
              <div className={s.button} onClick={() => loginHandler(user)}>
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

export default loginPage;
