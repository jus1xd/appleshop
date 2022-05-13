import React, { useEffect } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import s from "../styles/Index.module.css";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAllProducts } from "../store/actions/fetchProducts";
import { refresh } from "../store/actions/auth";

const Index = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.productsReducer.products);
  const userFromDB = useAppSelector((state) => state.authReducer);
  useEffect(() => {
    dispatch(fetchAllProducts());
    userFromDB.isAuth ? dispatch(refresh()) : "";
  }, []);
  const cards = products.map((product) => (
    <Card
      user={userFromDB.user}
      key={product._id}
      product={product}
      compare={false}
    />
  ));
  return (
    <>
      <Header />
      <section className={s.intro}>
        <div className={s.intro_inner}>
          <div className={s.intro_head}>
            <h2 className={s.intro_text}>КОНДИЦИОНЕРЫ <span className={s.green}>GREEN</span></h2>
            <h3 className={s.intro_subtext}>Просто. Нереально</h3>
          </div>
        </div>
      </section>
      <section className={s.heatsells}>
        <div className={s.container}>
          <div className={s.section_title}>Хиты продаж</div>
          <div className={s.heat_inner}>{cards.slice(12, 16)}</div>
          <Banner
            url="5"
            textColor="white"
            title="Не пробуйте"
            subtitle="плохой климат"
            type="png"
          />
          <div className={s.heat_inner}>{cards.slice(16, 20)}</div>
          <Banner
            url="3"
            title="Попробуйте"
            subtitle="GREEN"
            type="png"
          />
          <div className={s.heat_inner}>{cards.slice(20, 24)}</div>
        </div>
      </section>
    </>
  );
};
export default Index;
