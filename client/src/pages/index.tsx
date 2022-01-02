import React, { useEffect } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";

import s from "../styles/Index.module.css";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAllProducts } from "../store/actions/fetchProducts";

const Index = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const data = useAppSelector((state) => state.productsReducer.products);

  const cards = data.map(card => <Card img={card.picture} name={card.title} cost={card.price} id={card._id}/>)

  return (
    <>
      <Header />

      <section className={s.intro}>
        <div className={s.container}>
          <div className={s.intro_inner}></div>
        </div>
      </section>

      <section className={s.heatsells}>
        <div className={s.container}>
          <div className={s.section_title}>Хиты продаж</div>
          <div className={s.heat_inner}>
            {cards}
          </div>
          <div className={s.airpods}>
            <video
              width="1170px"
              src="../img/video/airpods.mp4"
              autoPlay={true}
              loop={true}
              controls={false}
            ></video>
            <div className={`${s.section_title} ${s.air_title}`}>
              Попробуйте <span>AirPods</span>
            </div>
          </div>
          <div className={s.heat_inner}>
            
          </div>
        </div>
      </section>
    </>
  );
};
export default Index;
