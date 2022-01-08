import React, { useState } from "react";
import s from "./BasketCard.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import jwtDecode from "jwt-decode";
import { changeQuantity } from "../../store/actions/fetchProducts";

interface ICartItems {
  img: string;
  name: string;
  cost: number;
  id: string;
}

function BasketCard({ img, name, cost, id }: ICartItems) {
  const userFromDB = useAppSelector((state) => state.authReducer.user);
  const [quantity, setQuantity] = useState<number>(1);
  const [productId, setProductId] = useState<string>("");
  const dispatch = useAppDispatch();

  if (productId && quantity != 1) {
    const setServerQuantity = {
      // @ts-ignore
      userId: jwtDecode(`${userFromDB.accessToken}`).id,
      productId: productId,
      quantity: quantity,
    };
    dispatch(changeQuantity(setServerQuantity));
    console.log(setServerQuantity);
  }

  const onMinusHandler = (quantity: number) => {
    quantity > 1 ? setQuantity((quantity -= 1)) : setQuantity(1),
      setProductId(id);
  };
  const onPlusHandler = (quantity: number) => {
    setQuantity((quantity += 1)), setProductId(id);
  };
  return (
    <div className={s.basket_card}>
      <div className={s.basket_leftside}>
        <div className={s.basket_photo_container}>
          <img
            className={s.basket_photo}
            src={`http://localhost:5000/${img}`}
            alt="productPhoto"
          />
        </div>
        <div className={s.basket_name}>
          <div className={s.basket_product_name}>{name}</div>
          <div className={s.basket_counter}>
            <img
              onClick={() => onPlusHandler(quantity)}
              src="../img/basket/plus.svg"
            />
            <div className={s.counter_number}>{quantity}</div>
            <img
              src="../img/basket/minus.svg"
              onClick={() => onMinusHandler(quantity)}
            />
          </div>
        </div>
      </div>
      <div className={s.basket_cost}>{cost} ₽</div>
    </div>
  );
}

export default BasketCard;
