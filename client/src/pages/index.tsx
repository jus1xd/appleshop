import React, { useEffect } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import s from "../styles/Index.module.css";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAllProducts } from "../store/actions/fetchProducts";

const Index = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.productsReducer.products);
  const userFromDB = useAppSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  const cards = data.map((card) => (
    // @ts-ignore
    <Card user={userFromDB} key={card._id} card={card} />
  ));
  return (
    <>
      <Header />
      <section className={s.intro}>
        <div className={s.intro_inner}>
          <div className={s.intro_head}>
            <h2 className={s.intro_text}>iPhone 13 Pro</h2>
            <h3 className={s.intro_subtext}>Просто. Нереально</h3>
          </div>
        </div>
      </section>
      <section className={s.heatsells}>
        <div className={s.container}>
          <div className={s.section_title}>Хиты продаж</div>
          <div className={s.heat_inner}>{cards.slice(0, 8)}</div>
          <Banner url='airpods' title='Попробуйте' subtitle='AirPods' type='mp4'/>
          <div className={s.heat_inner}>{cards.slice(8, 16)}</div>
          <Banner url='macbook' title='Попробуйте' subtitle='MacBook' type='png'/>
        </div>
      </section>
    </>
  );
};
export default Index;
