import React from "react";
import Header from "../components/Header/Header";

import s from "../styles/Product.module.css";

function Product() {
  return (
    <>
      <Header />
      <section className={s.product}>
        <div className={s.container}>
          <div className={s.section_title}>Страница товара</div>
          <div className={s.product_inner}>
            <div className={s.photo_section}>
              <img src="../img/product/2.png" alt="" />
            </div>
            <div className={s.info_section}>
              <div className={s.section_title}>
                Apple iPhone 13, 128 ГБ, «синий»
              </div>
              <div className={s.product_cost}>79 990 ₽</div>
              <div className={s.main_btn}>Добавить в корзину</div>
              <div className={s.prod_title}>Описание</div>
              <div className={s.prod_subtitle}>
                Наша самая совершенная система двух камер. Улавливает до 47%
                больше света для более качественных фотографий и видео.
              </div>
              <div className={s.prod_title}>Характеристики</div>
              <div className={s.spec_title}>Общие характеристики</div>
              <div className={s.spec_wrapper}>
                <div className={s.spec_condit}>Операционная система:</div>
                <div className={s.spec_value}>iOS</div>
              </div>
              <div className={s.spec_wrapper}>
                <div className={s.spec_condit}>Модель:</div>
                <div className={s.spec_value}>iPhone 13 128gb</div>
              </div>
              <div className={s.spec_wrapper}>
                <div className={s.spec_condit}>Версия ОС:</div>
                <div className={s.spec_value}>macOS 15.1</div>
              </div>
              <div className={s.spec_wrapper}>
                <div className={s.spec_condit}>Гарантийный срок:</div>
                <div className={s.spec_value}>2 года</div>
              </div>
              <div className={s.spec_title}>Экран</div>
              <div className={s.spec_wrapper}>
                <div className={s.spec_condit}>Диагональ экрана:</div>
                <div className={s.spec_value}>6.1''</div>
              </div>
              <div className={s.spec_wrapper}>
                <div className={s.spec_condit}>Разрешение экрана:</div>
                <div className={s.spec_value}>1600x2560</div>
              </div>
              <div className={s.spec_wrapper}>
                <div className={s.spec_condit}>Тип матрицы:</div>
                <div className={s.spec_value}>IPS</div>
              </div>
              <div className={s.spec_title}>Процессор</div>
              <div className={s.spec_wrapper}>
                <div className={s.spec_condit}>Процессор:</div>
                <div className={s.spec_value}>Apple Bionic A15</div>
              </div>
              <div className={s.spec_wrapper}>
                <div className={s.spec_condit}>Количество ядер:</div>
                <div className={s.spec_value}>8</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={s.banner}>
        <div className={s.container}>
          <div className={s.banner_inner}>
            <img src="../img/banner/1.png" />
            <div className={s.banner_text}>iPhone стал лучше</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
