import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import s from "./Header.module.css";
import Category from "./Category/Category";
import Find from "./Find/Find";
import BasketPopup from "./BasketPopup/BasketPopup";
import ProfilePopup from "./ProfilePopup/ProfilePopup";
import { useAppSelector } from "../../hooks/redux";

const Header = () => {
  const [categoryActive, setCategoryActive] = useState<boolean>(false);
  const [findActive, setFindActive] = useState<boolean>(false);
  const [basketActive, setBasketActive] = useState<boolean>(false);
  const [profileActive, setProfileActive] = useState<boolean>(false);
  const authState = useAppSelector((state) => state.authReducer);

  function categoryHandler() {
    setFindActive(false);
    setCategoryActive(true);
  }

  const [searchString, setSearchString] = useState<string>("");
  const cartItems = useAppSelector((state) => state.productsReducer.cart);
  return (
    <>
      <Head>
        <title>Applify - Онлайн-магазин техники Apple</title>
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
            <div
              className={s.btn_container}
              onMouseOver={() => categoryHandler()}
              onMouseOut={() => setCategoryActive(false)}
            >
              <div className={s.category_btn}>
                Категории
                <img src="../img/header/category.svg" alt="" />
              </div>
            </div>
            <div className={s.search}>
              <input
                className={
                  findActive ? `${s.find_input} ${s.active}` : s.find_input
                }
                value={searchString}
                type="text"
                placeholder="Искать.."
                onFocus={() => setFindActive(true)}
                onBlur={() => setFindActive(false)}
                onChange={(e) => setSearchString(e.target.value)}
              />
              <img src="../img/header/find.svg" alt="" />
              <Find
                setSearchString={setSearchString}
                searchString={searchString}
                active={findActive}
                setActive={setFindActive}
              />
            </div>
            <nav className={s.nav}>
              <Link href="/compare">
                <a className={`${s.nav_item} ${s.auth_btn}`}>
                  <div className={s.icon_container}>
                    <img src="../img/header/comparison.svg" alt="" />
                  </div>
                  <div>Сравнение</div>
                </a>
              </Link>
              <Link href="/basket">
                <a
                  className={s.nav_item}
                  onMouseOver={() => setBasketActive(true)}
                  onMouseOut={() => setBasketActive(false)}
                >
                  <div className={s.icon_container}>
                    <img src="../img/header/basket.svg" alt="" />
                  </div>
                  <div>Корзина</div>
                </a>
              </Link>
              {cartItems.length !== 0 ? (
                <BasketPopup
                  active={basketActive}
                  setActive={setBasketActive}
                />
              ) : null}
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
        <Category active={categoryActive} setActive={setCategoryActive} />
      </header>{" "}
    </>
  );
};

export default Header;
