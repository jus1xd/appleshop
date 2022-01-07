import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
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
  const [userRepeatPassword, setUserRepeatPassword] = useState<string>("");

  const [nameError, setNameError] = useState<string>(
    "Имя не может быть пустое"
  );
  const [emailError, setEmailError] = useState<string>(
    "Email не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState<string>(
    "Пароль некорректный"
  );
  const [repeatPasswordError, setRepeatPasswordError] = useState<string>(
    "Пароли не совпадают"
  );

  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [nameDirty, setNameDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [repeatPasswordDirty, setRepeatPasswordDirty] =
    useState<boolean>(false);

  const usernameHandler = (e: any) => {
    setUserName(e.target.value);
    if (!e.target.value) {
      setNameError("Имя не может быть пустое");
    } else {
      setNameError("");
    }
  };

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

  const repeatPasswordHandler = (e: any) => {
    setUserRepeatPassword(e.target.value);
    if (!e.target.value) {
      setRepeatPasswordError("Повтор пароля не должен быть пустым");
    } else if (e.target.value < 4 || e.target.value > 32) {
      setRepeatPasswordError("Пароль должен быть длинной 4-16 символов");
    } else if (userPassword !== e.target.value) {
      setRepeatPasswordError("Пароли не совпадают");
    } else {
      setRepeatPasswordError("");
    }
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    switch (e.target.name) {
      case "username":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;

      case "repeatPassword":
        setRepeatPasswordDirty(true);
        break;
      default:
        break;
    }
  };

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
                className={
                  nameDirty && nameError ? `${s.reg} ${s.error}` : s.reg
                }
                type="text"
                name="username"
                placeholder="Введите ваше имя..."
                onChange={(e) => usernameHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={userName}
              />
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
                  userPassword && passwordError ? `${s.reg} ${s.error}` : s.reg
                }
                type="password"
                name="password"
                placeholder="Введите пароль..."
                onChange={(e) => passwordHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={userPassword}
              />
              <input
                className={
                  repeatPasswordDirty && repeatPasswordError
                    ? `${s.reg} ${s.error}`
                    : s.reg
                }
                type="password"
                name="repeatPassword"
                placeholder="Повторите пароль..."
                onChange={(e) => repeatPasswordHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={userRepeatPassword}
              />
              <div className={s.button} onClick={() => registerHandler(user)}>
                <a href="#">Зарегистрироваться</a>
              </div>
              {nameDirty && nameError ? (
                <div className={s.error}>{nameError}</div>
              ) : emailDirty && emailError ? (
                <div className={s.error}>{emailError}</div>
              ) : passwordDirty && passwordError ? (
                <div className={s.error}>{passwordError}</div>
              ) : repeatPasswordDirty && repeatPasswordError ? (
                <div className={s.error}>{repeatPasswordError}</div>
              ) : (
                ""
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
