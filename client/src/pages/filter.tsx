import React, { useEffect } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { refresh } from "../store/actions/auth";
import { fetchAllProducts } from "../store/actions/fetchProducts";
import s from "../styles/Filter.module.css";

const Filter: React.FC = ({}): JSX.Element => {
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
      <div className={s.filter_wrapper}>
        <div className={s.container}>
          <div className={s.filter_inner_wrapper}>
            <div className={s.section_title}>
              Смартфоны - <span>20</span>
            </div>
            <div className={s.filter_splicer}>
              <div className={s.filter_cards}>{cards}</div>
              <div className={s.filter_section}>
                <div className={s.filter_inner}>
                  <div className={s.all_select}>
                    <div className={s.title_filter}>Сортировать</div>
                    <div className={s.buttons}>
                      <div className={s.main_btn}>По новизне</div>
                      <div className={s.btn_up_down}>
                        <img src="../img/icons/filter/down.svg" alt="" />
                      </div>
                      <div className={s.btn_up_down}>
                        <img
                          className={s.arrow_up}
                          src="../img/icons/filter/up.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className={s.filter_value}>
                      <div className={s.value_title}>Серия</div>
                      <div className={s.checkbox}>
                        <input
                          className={s.checkbox__input}
                          type="checkbox"
                          id="checkbox_1"
                        />
                        <label
                          className={s.checkbox__label}
                          htmlFor="checkbox_1"
                        >
                          iPhone 12
                        </label>
                      </div>
                      <div className={s.checkbox}>
                        <input
                          className={s.checkbox__input}
                          type="checkbox"
                          id="checkbox_2"
                        />
                        <label
                          className={s.checkbox__label}
                          htmlFor="checkbox_2"
                        >
                          iPhone 12 mini
                        </label>
                      </div>
                      <div className={s.checkbox}>
                        <input
                          className={s.checkbox__input}
                          type="checkbox"
                          id="checkbox_3"
                        />
                        <label
                          className={s.checkbox__label}
                          htmlFor="checkbox_3"
                        >
                          iPhone 12 Pro
                        </label>
                      </div>
                      <div className={s.checkbox}>
                        <input
                          className={s.checkbox__input}
                          type="checkbox"
                          id="checkbox_4"
                        />
                        <label
                          className={s.checkbox__label}
                          htmlFor="checkbox_4"
                        >
                          iPhone 12 Pro Max
                        </label>
                      </div>
                    </div>
                    <div className={s.price_range}>
                      <div className={s.price_title}>Цена, ₽</div>
                      <div className={s.price_inputs}>
                        <input
                          className={s.price_input}
                          type="text"
                          placeholder="34990"
                        />
                        <div className={s.line}>-</div>
                        <input
                          className={s.price_input}
                          type="text"
                          placeholder="94990"
                        />
                      </div>
                      <div className={s.price_item}></div>
                      <div className={s.dropall_btn}>Сбросить все</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
