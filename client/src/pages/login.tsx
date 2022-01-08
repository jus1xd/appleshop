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

  const [emailError, setEmailError] = useState<string>(
    "Email не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState<string>(
    "Пароль некорректный"
  );

  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);

  const emailHandler = (e: any) => {
    setUserEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Email не может быть пустым");
    } else if (!e.target.value.includes("@")) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e: any) => {
    setUserPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Пароль не должен быть пустым");
    } else if (e.target.value < 4 || e.target.value > 16) {
      setPasswordError("Пароль должен быть длинной 4-16 символов");
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };

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
                className={
                  emailDirty && emailError ? `${s.reg} ${s.error}` : s.reg
                }
                type="text"
                name="email"
                placeholder="Введите email..."
                onChange={(e) => emailHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={userEmail}
              />
              <input
                className={
                  passwordDirty && passwordError ? `${s.reg} ${s.error}` : s.reg
                }
                type="password"
                name="password"
                placeholder="Введите пароль..."
                onChange={(e) => passwordHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={userPassword}
              />
              {emailDirty && emailError ? (
                <div className={s.error}>{emailError}</div>
              ) : passwordDirty && passwordError ? (
                <div className={s.error}>{passwordError}</div>
              ) : (
                ""
              )}
              {emailError || passwordError ? (
                <div className={`${s.button} ${s.disabled}`}>
                  <a href="#">Войти</a>
                </div>
              ) : (
                <div className={s.button} onClick={() => loginHandler(user)}>
                  <a href="#">Войти</a>
                </div>
              )}

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
