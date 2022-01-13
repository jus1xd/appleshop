import React, {Dispatch, SetStateAction, useState} from "react";
import Modal from "../Modal";
import s from "../../../styles/Basket.module.css";
import {dateConst, timeConst} from "../../../utils/constants/date";
import DateItem from "../../DateItem/DateItem";
import TimeItem from "../../TimeItem/TimeItem";

interface IBasketModal {
    modalActive: boolean,
    setModalActive: Dispatch<SetStateAction<boolean>>
}

export const BasketModal = ( {modalActive, setModalActive}: IBasketModal ) => {
    const [onlinePayment, setOnlinePayment] = useState<boolean> ( true );
    const [payMethod, setPayMethod] = useState<string> ( "" );
    const [dateActive, setDateActive] = useState<string> ( "" );
    const [timeActive, setTimeActive] = useState<string> ( "" );
    let date = new Date ();
    let dd: number | string = date.getDate ()
    let mm: number | string = ( date.getMonth () + 1 )
    dd = dd < 10 ? '0' + dd.toString () : dd.toString ()
    mm = mm < 10 ? '0' + mm.toString () : mm.toString ()
    let today: string = dd + mm;
    return (
        <Modal active={modalActive} setActive={setModalActive}>
            <div className={s.wrapper}>
                <div className={s.modal_title}>Оформить заказ</div>
                <div className={s.modal_subtitle}>Информация о себе:</div>
                <div className={s.modal_inputs}>
                    <input className={s.modal_input} type="text" placeholder="Имя.."/>
                    <input
                        className={s.modal_input}
                        type="number"
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
                    {dateConst.map ( item =>
                        <DateItem
                            date={parseInt ( today ) + ( item * 100 ) + ( 0 * 1 )}
                            dateActive={dateActive}
                            setDate={setDateActive}
                            key={item}
                        /> )}
                </div>
                <div className={s.modal_subtitle}>Выбери время:</div>
                <div className={s.date_items}>
                    {timeConst.map ( item =>
                        <TimeItem
                            time={item}
                            key={item}
                            timeActive={timeActive}
                            setTime={setTimeActive}
                        /> )}
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
                            onClick={() => setOnlinePayment ( false )}
                        >
                            При получении
                        </div>
                        <div
                            className={
                                onlinePayment
                                    ? `${s.toggler_item} ${s.active}`
                                    : s.toggler_item
                            }
                            onClick={() => setOnlinePayment ( true )}
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
                                    onClick={() => setPayMethod ( "creditcard" )}
                                >
                                    <img src="../img/basket/modal/creditcard.svg" alt=""/>
                                    <div className={s.credit_text}>Банковская карта</div>
                                </div>
                                <div
                                    className={
                                        payMethod == "qiwi"
                                            ? `${s.payment_card} ${s.active}`
                                            : s.payment_card
                                    }
                                    onClick={() => setPayMethod ( "qiwi" )}
                                >
                                    <img src="../img/basket/modal/qiwi.svg" alt=""/>
                                    <div className={s.credit_text}>QIWI Wallet</div>
                                </div>
                                <div
                                    className={
                                        payMethod == "paypal"
                                            ? `${s.payment_card} ${s.active}`
                                            : s.payment_card
                                    }
                                    onClick={() => setPayMethod ( "paypal" )}
                                >
                                    <img src="../img/basket/modal/paypal.svg" alt=""/>
                                    <div className={s.credit_text}>PayPal</div>
                                </div>
                                <div
                                    className={
                                        payMethod == "applepay"
                                            ? `${s.payment_card} ${s.active}`
                                            : s.payment_card
                                    }
                                    onClick={() => setPayMethod ( "applepay" )}
                                >
                                    <img src="../img/basket/modal/applepay.svg" alt=""/>
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
                        <input type="checkbox" id="scales" name="scales"/>
                        <label htmlFor="scales">
                            Я согласен с условиями политики конфиденциальности и правилами
                            продажи
                        </label>
                    </div>
                </div>
            </div>
        </Modal>
    )
}