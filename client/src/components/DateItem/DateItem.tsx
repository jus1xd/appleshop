import { parse } from "path";
import React from "react";

import s from "./DateItem.module.css";

interface IDateItem {
  date: number | string;
  dateActive: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

const DateItem: React.FC<IDateItem> = ({
  date,
  dateActive,
  setDate,
}): JSX.Element => {
  // Приводим дату к строке
  // stringDate = '1501'

  let stringDate = date.toString();

  let newDate;
  let monthDate: string;
  let curDay: string | number = parseInt(stringDate.slice(0, 2));
  let newDay;
  let ostatokDay: any;

  // Берем номер месяца
  switch (stringDate.slice(2, 4)) {
    // В случае января:
    case "01":
      // Берем число этого месяца (строка)
      newDate = stringDate.slice(0, 2);
      //  Проверяем больше ли текущий день, чем дней в месяце
      if (curDay > 31) {
        // Оно больше, значит берем текущее кол-во дней и вычитаем кол-во дней в месяце и получаем остаток
        ostatokDay = curDay - 31;
        // Берем текущий месяц и прибавляем один
        newDate = parseInt(stringDate.slice(2, 4)) + 1;
        // Создаем новый день, который содержит в себе тот самый остаток дней
        newDay = 0 + ostatokDay;
        monthDate = newDay + " фев";
      } else {
        monthDate = newDate + " янв";
      }
      break;
    case "02":
      newDate = stringDate.slice(0, 2);
      if (curDay > 28) {
        ostatokDay = curDay - 31;
        newDate = parseInt(stringDate.slice(2, 4)) + 1;
        newDay = 0 + ostatokDay;
        monthDate = newDay + " мар";
      } else {
        monthDate = newDate + " фев";
      }
      break;
    case "03":
      newDate = stringDate.slice(0, 2);
      if (curDay > 31) {
        ostatokDay = curDay - 31;
        newDate = parseInt(stringDate.slice(2, 4)) + 1;
        newDay = 0 + ostatokDay;
        monthDate = newDay + " апр";
      } else {
        monthDate = newDate + " мар";
      }
      break;
    case "04":
      newDate = stringDate.slice(0, 2);
      if (curDay > 30) {
        ostatokDay = curDay - 31;
        newDate = parseInt(stringDate.slice(2, 4)) + 1;
        newDay = 0 + ostatokDay;
        monthDate = newDay + " мая";
      } else {
        monthDate = newDate + " апр";
      }
      break;
    case "05":
      newDate = stringDate.slice(0, 2);
      if (curDay > 31) {
        ostatokDay = curDay - 31;
        newDate = parseInt(stringDate.slice(2, 4)) + 1;
        newDay = 0 + ostatokDay;
        monthDate = newDay + " июн";
      } else {
        monthDate = newDate + " май";
      }
      break;
    case "06":
      newDate = stringDate.slice(0, 2);
      if (curDay > 30) {
        ostatokDay = curDay - 31;
        newDate = parseInt(stringDate.slice(2, 4)) + 1;
        newDay = 0 + ostatokDay;
        monthDate = newDay + " июл";
      } else {
        monthDate = newDate + " июн";
      }
      break;
    case "07":
      newDate = stringDate.slice(0, 2);
      if (curDay > 31) {
        ostatokDay = curDay - 31;
        newDate = parseInt(stringDate.slice(2, 4)) + 1;
        newDay = 0 + ostatokDay;
        monthDate = newDay + " авг";
      } else {
        monthDate = newDate + " июл";
      }
      break;
    case "08":
      newDate = stringDate.slice(0, 2);
      if (curDay > 31) {
        ostatokDay = curDay - 31;
        newDate = parseInt(stringDate.slice(2, 4)) + 1;
        newDay = 0 + ostatokDay;
        monthDate = newDay + " сен";
      } else {
        monthDate = newDate + " авг";
      }
      break;
    case "09":
      newDate = stringDate.slice(0, 2);
      if (curDay > 30) {
        ostatokDay = curDay - 31;
        newDate = parseInt(stringDate.slice(2, 4)) + 1;
        newDay = 0 + ostatokDay;
        monthDate = newDay + " окт";
      } else {
        monthDate = newDate + " сен";
      }
      break;
    case "10":
      newDate = stringDate.slice(0, 2);
      if (curDay > 31) {
        ostatokDay = curDay - 31;
        newDate = parseInt(stringDate.slice(2, 4)) + 1;
        newDay = 0 + ostatokDay;
        monthDate = newDay + " ноя";
      } else {
        monthDate = newDate + " окт";
      }
      break;
    case "11":
      newDate = stringDate.slice(0, 2);
      if (curDay > 30) {
        ostatokDay = curDay - 31;
        newDate = parseInt(stringDate.slice(2, 4)) + 1;
        newDay = 0 + ostatokDay;
        monthDate = newDay + " дек";
      } else {
        monthDate = newDate + " ноя";
      }
      break;
    case "12":
      newDate = stringDate.slice(0, 2);
      if (curDay > 31) {
        ostatokDay = curDay - 31;
        newDate = parseInt(stringDate.slice(2, 4)) + 1;
        newDay = 0 + ostatokDay;
        monthDate = newDay + " янв";
      } else {
        monthDate = newDate + " дек";
      }
      break;
    default:
      break;
  }

  return (
    <div
      className={
        // @ts-ignore
        dateActive === monthDate ? `${s.date_item} ${s.active}` : s.date_item
      }
      onClick={() => setDate(monthDate)}
    >
      {/* @ts-ignore */}
      {monthDate}.
    </div>
  );
};

export default DateItem;
