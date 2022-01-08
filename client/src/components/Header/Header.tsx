import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

import s from "./Header.module.css";
import Category from "./Category/Category";
import Find from "./Find/Find";
import BasketPopup from "./BasketPopup/BasketPopup";

function Header() {
  const [categoryActive, setCategoryActive] = useState<boolean>(false);
  const [findActive, setFindActive] = useState<boolean>(false);
  const [basketActive, setBasketActive] = useState<boolean>(true);

  function categoryHandler() {
    setFindActive(false);
    setCategoryActive(true);
  }

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
                <img src="../img/header/logo.png" alt="" />
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
                type="text"
                placeholder="Искать.."
                onFocus={() => setFindActive(true)}
                onBlur={() => setFindActive(false)}
              />
              <img src="../img/header/find.svg" alt="" />
              <Find active={findActive} setActive={setFindActive} />
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
              <Link href="/favorite">
                <a className={s.nav_item}>
                  <div className={s.icon_container}>
                    <img src="../img/header/favorite.svg" alt="" />
                  </div>
                  <div>Избранное</div>
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
              <BasketPopup active={basketActive} setActive={setBasketActive} />
              <Link href="/login">
                <a className={`${s.nav_item} ${s.auth_btn}`}>
                  <div className={s.icon_container}>
                    <img src="../img/header/user.svg" alt="" />
                  </div>
                  <div>Войти</div>
                </a>
              </Link>
            </nav>
          </div>
        </div>
        <Category active={categoryActive} setActive={setCategoryActive} />
      </header>{" "}
    </>
  );
}

export default Header;
