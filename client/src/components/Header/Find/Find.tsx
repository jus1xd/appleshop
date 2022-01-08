import React from "react";
import Link from "next/link";
import Head from "next/head";

import s from "./Find.module.css";

interface IFind {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Find({ active, setActive }: IFind) {
  return (
    <>
      <div
        className={active ? `${s.wrapper} ${s.active}` : s.wrapper}
        onMouseOver={() => setActive(true)}
        onMouseOut={() => setActive(false)}
      >
        <div className={s.container}>
          <div className={s.find_inner}>
            <div className={s.find_title}>История поиска</div>
            <div className={s.items}>
              <div className={s.find_item}>iPhone 11</div>
              <div className={s.find_item}>iPhone 12</div>
              <div className={s.find_item}>iPhone 13 mini</div>
              <div className={s.find_item}>MacBook Air</div>
              <div className={s.find_item}>Блек Джек</div>
              <div className={s.find_item}>Шлюхи</div>
            </div>
            <div className={s.clear_items}>Очистить историю поиска</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Find;
