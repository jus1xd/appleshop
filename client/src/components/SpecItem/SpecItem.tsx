import React from "react";
import { useAppSelector } from "../../hooks/redux";
import s from "./SpecItem.module.css";

interface ISpecItem {
  specValue: string[];
  translatedSpecItem: string;
}

const SpecItem: React.FC<ISpecItem> = ({
  translatedSpecItem,
  specValue,
}): JSX.Element => {
  return (
    <div className={s.sub_spec}>
      <div className={s.spec_name}>{translatedSpecItem}</div>
      <div className={s.spec_values}>
        {specValue.map((el) => (
          <div className={s.spec_value}>
            <span>{el}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecItem;
