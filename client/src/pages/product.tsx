import React from "react";
import Header from "../components/Header/Header";
import ProductInfo from "../components/ProductInfo/ProductInfo";

import s from "../styles/Product.module.css";

function Product() {
  return (
    <>
      <Header />
      <section className={s.product}>
        <div className={s.container}>
          <div className={s.section_title}>Страница товара</div>
          <ProductInfo productId="i13P512gold" />
        </div>
      </section>

      {/* <div className={s.banner}>
        <div className={s.container}>
          <div className={s.banner_inner}>
            <img src="../img/banner/1.png" />
            <div className={s.banner_text}>iPhone стал лучше</div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Product;
