import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchOneProduct } from "../../store/actions/fetchProducts";
import s from "./ProductInfo.module.css";
import { cardDispatch } from "../../utils/cardDispatch";

function ProductInfo() {
  const { query } = useRouter();
  const id: any = query.id;
  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, []);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.productsReducer.cart);
  const user = useAppSelector((state) => state.authReducer.user);
  const product = useAppSelector((state) => state.productReducer);
  const [productId, setProductId] = useState<string>("");
  useEffect(() => {
    cardDispatch(cart, product, productId, user, dispatch);
  }, [productId]);

  return (
    <>
      <div className={s.product_wrapper}>
        <div className={s.section_title}>Страница товара</div>
        <div className={s.product_inner}>
          <div className={s.photo_section}>
            <img src={`http://localhost:5000/${product.picture}`} alt="" />
          </div>
          <div className={s.info_section}>
            <div className={s.section_title}>{product.title}</div>
            <div className={s.product_cost}>{product.price} ₽</div>
            <div className={s.main_btn} onClick={() => setProductId(id)}>
              Добавить в корзину
            </div>
            <div className={s.prod_title}>Описание</div>
            <div className={s.prod_subtitle}>{product.subTitle}</div>
            <div className={s.prod_title}>Характеристики</div>
            <div className={s.spec_title}>Общие характеристики</div>
            {/* <div className={s.spec_wrapper}>
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
              <div className={s.spec_value}>6.1 ''</div>
            </div>
            <div className={s.spec_wrapper}>
              <div className={s.spec_condit}>Разрешение экрана:</div>
              <div className={s.spec_value}>1600 x2560</div>
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
            </div> */}

            <div className={s.spec_wrapper}>
              <div className={s.spec_condit}>Площадь помещения, м2:</div>
              <div className={s.spec_value}>до 30</div>
            </div>
            <div className={s.spec_wrapper}>
              <div className={s.spec_condit}>Производительность холод, кВт:</div>
              <div className={s.spec_value}>3,2</div>
            </div>
            <div className={s.spec_wrapper}>
              <div className={s.spec_condit}>Производительность тепло, кВт:</div>
              <div className={s.spec_value}>3,4</div>
            </div>
            <div className={s.spec_wrapper}>
              <div className={s.spec_condit}>Потребляемая мощн. тепло, Вт:</div>
              <div className={s.spec_value}>942</div>
            </div>
            {/* <div className={s.spec_title}>Экран</div> */}
            <div className={s.spec_wrapper}>
              <div className={s.spec_condit}>Номинальный ток холод, А:</div>
              <div className={s.spec_value}>4,5</div>
            </div>
            <div className={s.spec_wrapper}>
              <div className={s.spec_condit}>Номинальный ток тепло, А:</div>
              <div className={s.spec_value}>4,4	</div>
            </div>
            <div className={s.spec_wrapper}>
              <div className={s.spec_condit}>Звуковое давление внутр. блока, Дб(А):</div>
              <div className={s.spec_value}>42/37/35/28	</div>
            </div>
            <div className={s.spec_wrapper}>
              <div className={s.spec_condit}>Размеры внутреннего блока, мм:</div>
              <div className={s.spec_value}>790х200х275	</div>
            </div>
            <div className={s.spec_wrapper}>
              <div className={s.spec_condit}>Размеры наружного блока, мм:</div>
              <div className={s.spec_value}>735х340х540</div>
            </div>
            <div className={s.spec_wrapper}>
              <div className={s.spec_condit}>Межблочный кабель, жил/мм:</div>
              <div className={s.spec_value}>4/2,5</div>
            </div>
            <div className={s.spec_wrapper}>
              <div className={s.spec_condit}>Диапазон рабочих темп на холод/тепло, гр.С:</div>
              <div className={s.spec_value}>-15~48/-15~24</div>
            </div>
            <div className={s.spec_wrapper}>
              <div className={s.spec_condit}>Расстояние между лап внеш. блока, мм:</div>
              <div className={s.spec_value}>450</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
