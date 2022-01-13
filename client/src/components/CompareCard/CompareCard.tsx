import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import s from "./CompareCard.module.css";
import { IUser, Product } from "../../types";
import { addToCart, changeQuantity } from "../../store/actions/fetchProducts";
import { addToLocalCart } from "../../store/slices/mainSlice";
import jwtDecode from "jwt-decode";

interface ICompareCard {
  card: Product;
  user: IUser;
  key: string;
}

function CompareCard({ card, user }: ICompareCard) {
  const [productId, setProductId] = useState<string>("");
  const cart = useAppSelector((state) => state.productsReducer.cart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (productId && Object.keys(user).length != 0) {
      cart.every((item) => item.id !== productId)
        ? dispatch(
            addToCart({
              //@ts-ignore
              userId: jwtDecode(`${user.accessToken}`).id,
              productId: productId,
              price: card.price,
            })
          )
        : dispatch(
            changeQuantity({
              //@ts-ignore
              userId: jwtDecode(`${user.accessToken}`).id,
              productId: productId,
              quantity:
                //@ts-ignore
                cart.find((product) => product.id == productId).quantity + 1,
            })
          );
    } else if (productId) {
      dispatch(
        addToLocalCart({
          id: productId,
          quantity: 1,
          price: card.price,
        })
      );
    }
  }, [productId]);
  return (
    <div className={s.card}>
      <Link href={`./products/${card._id}`}>
        <div className={s.card_photo_container}>
          <img src={`http://localhost:5000/${card.picture}`} alt="" />
        </div>
      </Link>
      <Link href={`./products/${card._id}`}>
        <a className={s.card_title}>{card.title}</a>
      </Link>
      <div className={s.card_cost}>
        {card.price.toString().length === 8
          ? `${card.price.toString().slice(0, 2)} ${card.price
              .toString()
              .slice(2, 5)} ${card.price.toString().slice(5, 8)} `
          : card.price.toString().length === 7
          ? `${card.price.toString().slice(0, 1)} ${card.price
              .toString()
              .slice(1, 4)} ${card.price.toString().slice(4, 7)} `
          : card.price.toString().length === 6
          ? `${card.price.toString().slice(0, 3)} ${card.price
              .toString()
              .slice(3, 6)} `
          : card.price.toString().length === 5
          ? `${card.price.toString().slice(0, 2)} ${card.price
              .toString()
              .slice(2, 5)} `
          : card.price.toString().length === 4
          ? `${card.price.toString().slice(0, 1)} ${card.price
              .toString()
              .slice(1, 4)} `
          : card.price.toString().length === 3
          ? `${card.price.toString().slice(0, 3)} `
          : `${card.price.toString()}`} ₽
      </div>
      <div className={s.card_btns}>
        <div className={s.main_btn} onClick={() => setProductId(card._id)}>
          В корзину
        </div>{" "}
        <div className={`${s.main_btn} ${s.icon_btn}`}>
          <img src="../img/icons/delete.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CompareCard;
