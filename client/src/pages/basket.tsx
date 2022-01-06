import React, { useState } from "react";
import BasketCard from "../components/BasketCard/BasketCard";
import DateItem from "../components/DateItem/DateItem";
import TimeItem from "../components/TimeItem/TimeItem";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import { useAppSelector } from "../hooks/redux";
import s from "../styles/Basket.module.css";

const Basket = () => {
  const data = useAppSelector(state => state.productsReducer.products)
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
  const [dateActive, setDateActive] = useState<string>("");
  const [timeActive, setTimeActive] = useState<string>("");

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
              <div className={s.payment_subtitle_text}>
                Вы можете оплатить заказ на сайте или при получении товара у
                курьера.
              </div>
              <div className={s.payment_values}>
                <div className={s.payment_total}>
                  <div className={s.payment_subtitle}>Кол-во:</div>
                  <div className={s.total}>3</div>
                </div>
                <div className={s.payment_total}>
                  <div className={s.payment_subtitle}>Итого:</div>
                  <div className={s.total}>89 991 ₽</div>
                </div>
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
            <DateItem
              date="5 янв"
              dateActive={dateActive}
              setDate={setDateActive}
            />
            <DateItem
              date="6 янв"
              dateActive={dateActive}
              setDate={setDateActive}
            />
            <DateItem
              date="7 янв"
              dateActive={dateActive}
              setDate={setDateActive}
            />
            <DateItem
              date="8 янв"
              dateActive={dateActive}
              setDate={setDateActive}
            />
            <DateItem
              date="9 янв"
              dateActive={dateActive}
              setDate={setDateActive}
            />
            <DateItem
              date="10 янв"
              dateActive={dateActive}
              setDate={setDateActive}
            />
            <DateItem
              date="11 янв"
              dateActive={dateActive}
              setDate={setDateActive}
            />
            <DateItem
              date="12 янв"
              dateActive={dateActive}
              setDate={setDateActive}
            />
            <DateItem
              date="13 янв"
              dateActive={dateActive}
              setDate={setDateActive}
            />
          </div>
          <div className={s.modal_subtitle}>Выбери время:</div>
          <div className={s.date_items}>
            <TimeItem
              time="10:00"
              timeActive={timeActive}
              setTime={setTimeActive}
            />
            <TimeItem
              time="11:00"
              timeActive={timeActive}
              setTime={setTimeActive}
            />
            <TimeItem
              time="12:00"
              timeActive={timeActive}
              setTime={setTimeActive}
            />
            <TimeItem
              time="13:00"
              timeActive={timeActive}
              setTime={setTimeActive}
            />
            <TimeItem
              time="14:00"
              timeActive={timeActive}
              setTime={setTimeActive}
            />
            <TimeItem
              time="15:00"
              timeActive={timeActive}
              setTime={setTimeActive}
            />
            <TimeItem
              time="16:00"
              timeActive={timeActive}
              setTime={setTimeActive}
            />
            <TimeItem
              time="17:00"
              timeActive={timeActive}
              setTime={setTimeActive}
            />
            <TimeItem
              time="18:00"
              timeActive={timeActive}
              setTime={setTimeActive}
            />
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
