import React from "react";

import s from "./ProductInfo.module.css";

interface IProductInfo {
  productId: string;
}

function ProductInfo({ productId }: IProductInfo) {
  let baseImg = "../img/product/";

  let img: string = '';
  let name: string = '';
  let cost: number = 0;
  let description: string = '';

  switch (productId) {
    case "i1364blue":
      img = "1";
      name = "Apple iPhone 13, 64 ГБ, «синий»";
      cost = 79999;
      break;
    case "i13128white":
      img = "2";
      name = "Apple iPhone 13, 128 ГБ, «белый»";
      cost = 79999;
      break;
    case "i13256black":
      img = "3";
      name = "Apple iPhone 13, 256 ГБ, «черный»";
      cost = 79999;
      break;
    case "i13512red":
      img = "4";
      name = "Apple iPhone 13, 512 ГБ, «красный»";
      cost = 79999;
      break;
    case "i13P64gray":
      img = "5";
      name = "Apple iPhone 13 Pro, 64 ГБ, «серый»";
      cost = 79999;
      break;
    case "i13P128white":
      img = "6";
      name = "Apple iPhone 13 Pro, 128 ГБ, «белый»";
      cost = 79999;
      break;
    case "i13P256blue":
      img = "7";
      name = "Apple iPhone 13 Pro, 256 ГБ, «синий»";
      cost = 79999;
      break;
    case "i13P512gold":
      img = "8";
      name = "Apple iPhone 13 Pro, 512 ГБ, «золотой»";
      cost = 79999;
      break;
    default:
      break;
  }

  description =
    "Наша самая совершенная система двух камер. Улавливает до 47% больше света для более качественных фотографий и видео.";

  return (
    <div className={s.product_inner}>
      <div className={s.photo_section}>
        <img src={`${baseImg}${img}.png`} alt="" />
      </div>
      <div className={s.info_section}>
        <div className={s.section_title}>{name}</div>
        <div className={s.product_cost}>{cost} ₽</div>
        <div className={s.main_btn}>Добавить в корзину</div>
        <div className={s.prod_title}>Описание</div>
        <div className={s.prod_subtitle}>{description}</div>
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
  );
}

export default ProductInfo;
