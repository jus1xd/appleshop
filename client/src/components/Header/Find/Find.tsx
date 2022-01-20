import React from "react";
import Link from "next/link";
import Head from "next/head";

import s from "./Find.module.css";
import { useAppSelector } from "../../../hooks/redux";
import { Product } from "../../../types";
import { useRouter } from "next/router";

interface IFind {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}

function Find({ active, setActive, searchString, setSearchString }: IFind) {
  const router = useRouter();
  const product = useAppSelector((state) => state.productsReducer.products);
  const findItems = product.filter((product) =>
    product.title.toLowerCase().includes(searchString.toLowerCase().trim())
  );
  const onFindClick = (e: any, product: Product) => {
    setSearchString(e.target.textContent);
    setActive(false);
    router.push(`http://localhost:3000/products/${product._id}`);
  };
  return (
    <>
      {searchString ? (
        <div
          className={active ? `${s.wrapper} ${s.active}` : s.wrapper}
          onMouseOver={() => setActive(true)}
          onMouseOut={() => setActive(false)}
        >
          <div className={s.container}>
            <div className={s.find_inner}>
              <div className={s.find_title}>История поиска</div>
              <div className={s.items}>
                {findItems.map((item) => (
                  <div
                    key={item._id}
                    onClick={(e) => onFindClick(e, item)}
                    className={s.find_item}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
              <div className={s.clear_items}>Очистить историю поиска</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Find;
