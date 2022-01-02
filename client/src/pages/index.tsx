import React from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";

import s from "../styles/Index.module.css";

const Index = () => {
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
            <Card img={1} name="Apple MacBook Pro 2020" cost={251999} link="" />
            <Card img={2} name="Apple MacBook Pro 2020" cost={251999} link="" />
            <Card img={3} name="Apple MacBook Pro 2020" cost={251999} link="" />
            <Card img={4} name="Apple MacBook Pro 2020" cost={251999} link="" />
            <Card img={5} name="Apple MacBook Pro 2020" cost={251999} link="" />
            <Card img={6} name="Apple MacBook Pro 2020" cost={251999} link="" />
            <Card img={7} name="Apple MacBook Pro 2020" cost={251999} link="" />
            <Card img={8} name="Apple MacBook Pro 2020" cost={251999} link="" />
            <Card img={9} name="Apple MacBook Pro 2020" cost={251999} link="" />
            <Card
              img={10}
              name="Apple MacBook Pro 2020"
              cost={251999}
              link=""
            />
            <Card
              img={11}
              name="Apple MacBook Pro 2020"
              cost={251999}
              link=""
            />
            <Card
              img={12}
              name="Apple MacBook Pro 2020"
              cost={251999}
              link=""
            />
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
            <Card
              img={13}
              name="Apple MacBook Pro 2020"
              cost={251999}
              link=""
            />
            <Card
              img={14}
              name="Apple MacBook Pro 2020"
              cost={251999}
              link=""
            />
            <Card
              img={15}
              name="Apple MacBook Pro 2020"
              cost={251999}
              link=""
            />
            <Card
              img={16}
              name="Apple MacBook Pro 2020"
              cost={251999}
              link=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
