import React from "react";

import s from "./TimeItem.module.css";

interface ITimeItem {
  time: string;
  timeActive: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
}

const TimeItem: React.FC<ITimeItem> = ({
  time,
  timeActive,
  setTime,
}): JSX.Element => {
  return (
    <div
      className={
        timeActive === time ? `${s.time_item} ${s.active}` : s.time_item
      }
      onClick={() => setTime(time)}
    >
      {time}
    </div>
  );
};

export default TimeItem;
