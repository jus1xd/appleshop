import React from "react";
import Link from "next/link";
import Head from "next/head";

import s from "./Header.module.css";

function Header() {
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
            <div className={s.category_btn}>
              Категории
              <img src="../img/header/category.svg" alt="" />
            </div>
            <div className={s.search}>
              <input type="text" placeholder="Искать.." />
            </div>
            <nav className={s.nav}>
            <Link href="/login">
                <a className={`${s.nav_item} ${s.auth_btn}`}>
                  <img src="../img/header/comparison.svg" alt="" />
                  <div>Сравнение</div>
                </a>
              </Link>
              <Link href="/basket">
                <a href="./basket" className={s.nav_item}>
                  <img src="../img/header/favorite.svg" alt="" />
                  <div>Избранное</div>
                </a>
              </Link>
              <Link href="/login">
                <a className={`${s.nav_item} ${s.auth_btn}`}>
                  <img src="../img/header/user.svg" alt="" />
                  <div>Войти</div>
                </a>
              </Link>
              <Link href="/basket">
                <a href="./basket" className={s.nav_item}>
                  <img src="../img/header/basket.svg" alt="" />
                  <div>Корзина</div>
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
