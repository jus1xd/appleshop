import React from "react";

import s from "./DateItem.module.css";

interface IDateItem {
  date: string;
  dateActive: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

const DateItem: React.FC<IDateItem> = ({
  date,
  dateActive,
  setDate,
}): JSX.Element => {
  return (
    <div
      className={
        dateActive === date ? `${s.date_item} ${s.active}` : s.date_item
      }
      onClick={() => setDate(date)}
    >
      {date}.
    </div>
  );
};

export default DateItem;
