import React from "react";

import Header from "../../components/Header/Header";
import ProductInfo from "../../components/ProductInfo/ProductInfo";

import s from "../../styles/Product.module.css";

export default function () {
  

  return (
    <>
      <Header />
      <section className={s.product}>
        <div className={s.container}>
          <div className={s.section_title}>Страница товара</div>
          <ProductInfo />
        </div>
      </section>
    </>
  );
}
