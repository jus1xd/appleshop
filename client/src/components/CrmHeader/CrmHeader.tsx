import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import s from "./CrmHeader.module.css";
import ProfilePopup from "../Header/ProfilePopup/ProfilePopup";
import { useAppSelector } from "../../hooks/redux";

const CrmHeader = () => {
  const [profileActive, setProfileActive] = useState<boolean>(false);
  const authState = useAppSelector((state) => state.authReducer);

  return (
    <>
      <Head>
        <title>Панель управления</title>
        <link
          type="image/svg"
          sizes="120x120"
          rel="icon"
          href="../img/fav.svg"
        />
      </Head>
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.header_inner}>
            <Link href="http://localhost:3000/">
              <a className={s.logo}>
                <span className={s.logo_wrapper}>
                  Appli<span className={s.fy_moment}>fy.</span>
                </span>
              </a>
            </Link>
            <nav className={s.crm_nav}>
              <Link href={"http://localhost:3000/adminpanel"}>
                <a className={s.crm_nav_item}>Аналитика</a>
              </Link>{" "}
              <Link href={"http://localhost:3000/adminpanel"}>
                <a className={s.crm_nav_item}>Заказы</a>
              </Link>{" "}
              <Link href={"http://localhost:3000/adminpanel"}>
                <a className={s.crm_nav_item}>Товары</a>
              </Link>
            </nav>

            <nav className={s.nav}>
              {authState.isAuth ? (
                <Link href="/profile">
                  <a
                    className={`${s.nav_item} ${s.profile_btn}`}
                    onMouseOver={() => setProfileActive(true)}
                    onMouseOut={() => setProfileActive(false)}
                  >
                    <div className={s.icon_container}>
                      <img src="../img/header/profile.png" alt="" />
                    </div>
                    <div>Профиль</div>
                  </a>
                </Link>
              ) : (
                <Link href="/login">
                  <a className={`${s.nav_item}`}>
                    <div className={s.icon_container}>
                      <img src="../img/header/user.svg" alt="" />
                    </div>
                    <div>Войти</div>
                  </a>
                </Link>
              )}
              <ProfilePopup
                active={profileActive}
                setActive={setProfileActive}
                authState={authState}
              />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default CrmHeader;
