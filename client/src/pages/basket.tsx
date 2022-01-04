import React, { useState } from "react";
import { on } from "stream";
import BasketCard from "../components/BasketCard/BasketCard";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import { useAppSelector } from "../hooks/redux";

import s from "../styles/Basket.module.css";

const Basket = () => {
  const data = useAppSelector((state) => state.productsReducer.cart);

  const basketItems = data.map((product) => (
    <BasketCard
      img={product.picture}
      name={product.title}
      cost={product.price}
      key={product._id}
    />
  ));

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [onlinePayment, setOnlinePayment] = useState<boolean>(true);
  const [payMethod, setPayMethod] = useState<string>("");

  return (
    <>
      <Header />

      <section className={s.basket}>
        <div className={s.container}>
          <div className={s.section_title}>Корзина</div>
          <div className={s.basket_inner}>
            <div className={s.basket_cards}>
              {basketItems.length > 0 ? basketItems : "Корзина пуста"}
            </div>

            <div className={s.payment}>
              <div className={s.payment_title}>Оформить заказ</div>
              <div className={s.inputs}>
                <input
                  type="text"
                  className={s.main_input}
                  placeholder="Имя.."
                />
                <input
                  type="text"
                  className={s.main_input}
                  placeholder="Телефон.."
                />
                <input
                  type="text"
                  className={s.main_input}
                  placeholder="Адрес.."
                />
              </div>
              <div className={s.payment_subtitle}>Способ оплаты</div>
              <div className={s.payment_items}>
                <div className={s.p_item}>
                  <img src="../img/basket/payment/1.svg" alt="" />
                </div>
                <div className={s.p_item}>
                  <img src="../img/basket/payment/2.svg" alt="" />
                </div>
                <div className={s.p_item}>
                  <img src="../img/basket/payment/3.svg" alt="" />
                </div>
                <div className={s.p_item}>
                  <img src="../img/basket/payment/4.svg" alt="" />
                </div>
              </div>
              <div className={s.payment_total}>
                <div className={s.payment_subtitle}>Итого:</div>
                <div className={s.total}>89 991 ₽</div>
              </div>
              <div className={s.main_btn} onClick={() => setModalActive(true)}>
                Перейти к оплате
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal active={modalActive} setActive={setModalActive}>
        <div className={s.wrapper}>
          <div className={s.modal_title}>Оформить заказ</div>
          <div className={s.modal_subtitle}>Информация о себе:</div>
          <div className={s.modal_inputs}>
            <input className={s.modal_input} type="text" placeholder="Имя.." />
            <input
              className={s.modal_input}
              type="text"
              placeholder="Номер телефона.."
            />
            <input
              className={s.modal_input}
              type="text"
              placeholder="Адрес.."
            />
          </div>
          <div className={s.modal_subtitle}>Выбери дату:</div>
          <div className={s.date_items}>
            <div className={s.date_item}>5 янв.</div>
            <div className={s.date_item}>6 янв.</div>
            <div className={s.date_item}>7 янв.</div>
            <div className={s.date_item}>8 янв.</div>
            <div className={s.date_item}>9 янв.</div>
            <div className={s.date_item}>10 янв.</div>
            <div className={s.date_item}>11 янв.</div>
            <div className={s.date_item}>12 янв.</div>
            <div className={s.date_item}>13 янв.</div>
          </div>
          <div className={s.modal_subtitle}>Выбери время:</div>
          <div className={s.date_items}>
            <div className={s.date_item}>10:00</div>
            <div className={s.date_item}>11:00</div>
            <div className={s.date_item}>12:00</div>
            <div className={s.date_item}>13:00</div>
            <div className={s.date_item}>14:00</div>
            <div className={s.date_item}>15:00</div>
            <div className={s.date_item}>16:00</div>
            <div className={s.date_item}>17:00</div>
            <div className={s.date_item}>18:00</div>
          </div>
          <div className={s.modal_subtitle}>Выбери способ оплаты:</div>
          <div className={s.payment_way}>
            <div className={s.payment_toggler}>
              <div
                className={
                  onlinePayment
                    ? s.toggler_item
                    : `${s.toggler_item} ${s.active}`
                }
                onClick={() => setOnlinePayment(false)}
              >
                При получении
              </div>
              <div
                className={
                  onlinePayment
                    ? `${s.toggler_item} ${s.active}`
                    : s.toggler_item
                }
                onClick={() => setOnlinePayment(true)}
              >
                Онлайн
              </div>
            </div>
            <div className={s.payment_container}>
              {onlinePayment ? (
                ""
              ) : (
                <div className={s.payment_text}>
                  Курьер принесет вам товар, вы можете осмотреть его на наличие
                  дефектов или брака и оплатить банковской карточкой или
                  наличными.
                </div>
              )}
              {onlinePayment ? (
                <div className={s.payment_cards}>
                  <div
                    className={
                      payMethod == "creditcard"
                        ? `${s.payment_card} ${s.active}`
                        : s.payment_card
                    }
                    onClick={() => setPayMethod("creditcard")}
                  >
                    <img src="../img/basket/modal/creditcard.svg" alt="" />
                    <div className={s.credit_text}>Банковская карта</div>
                  </div>
                  <div
                    className={
                      payMethod == "qiwi"
                        ? `${s.payment_card} ${s.active}`
                        : s.payment_card
                    }
                    onClick={() => setPayMethod("qiwi")}
                  >
                    <img src="../img/basket/modal/qiwi.svg" alt="" />
                    <div className={s.credit_text}>QIWI Wallet</div>
                  </div>
                  <div
                    className={
                      payMethod == "paypal"
                        ? `${s.payment_card} ${s.active}`
                        : s.payment_card
                    }
                    onClick={() => setPayMethod("paypal")}
                  >
                    <img src="../img/basket/modal/paypal.svg" alt="" />
                    <div className={s.credit_text}>PayPal</div>
                  </div>
                  <div
                    className={
                      payMethod == "applepay"
                        ? `${s.payment_card} ${s.active}`
                        : s.payment_card
                    }
                    onClick={() => setPayMethod("applepay")}
                  >
                    <img src="../img/basket/modal/applepay.svg" alt="" />
                    <div className={s.credit_text}>Apple Pay</div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={s.send_container}>
            <div className={s.modal_btn}>Отправить</div>
            <div className={s.checkbox}>
              <input type="checkbox" id="scales" name="scales" />
              <label htmlFor="scales">
                Я согласен с условиями политики конфиденциальности и правилами
                продажи
              </label>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Basket;
