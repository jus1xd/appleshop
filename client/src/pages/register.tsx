import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import { useAppDispatch } from "../hooks/redux";
import { register } from "../store/actions/auth";

import s from "../styles/Auth.module.css";

type TUser = {
  username: string;
  email: string;
  password: string;
};

function registerPage() {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [repeatUserPassword, setUserRepeatPassword] = useState<string>("");

  const dispatch = useAppDispatch();

  const user: TUser = {
    username: userName,
    email: userEmail,
    password: userPassword,
  };

  const registerHandler = async (user: TUser) => {
    dispatch(register(user));
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
              <div className={s.title_log}>Зарегистрируйтесь в системе</div>
              <input
                className={s.reg}
                type="text"
                placeholder="Введите ваше имя..."
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
              <input
                className={s.reg}
                type="text"
                placeholder="Введите email..."
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
              />
              <input
                className={s.reg}
                type="text"
                placeholder="Введите пароль..."
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
              />
              <input
                className={s.reg}
                type="text"
                placeholder="Повторите пароль..."
                onChange={(e) => setUserRepeatPassword(e.target.value)}
                value={repeatUserPassword}
              />
              <div className={s.button} onClick={() => registerHandler(user)}>
                <a href="#">Зарегистрироваться</a>
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
                Есть аккаунт?
                <Link href="/login">
                  <a> Войдите в него</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default registerPage;
