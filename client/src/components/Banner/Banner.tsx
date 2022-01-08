import React from "react";
import s from "./Banner.module.css";

interface IBanner {
  url: string;
  title: string;
  subtitle: string;
  type: string;
}

function Banner({ url, title, subtitle, type }: IBanner) {
  return (
    <div className={s.wrapper}>
      {type === "mp4" ? (
        <video
          width="1170px"
          src={`../img/banner/${url}.mp4`}
          autoPlay={true}
          loop={true}
          controls={false}
        />
      ) : (
        <img src={`../img/banner/${url}.png`} />
      )}
      <div className={s.ban_title}>
        {title} <span>{subtitle}</span>
      </div>
    </div>
  );
}

export default Banner;
