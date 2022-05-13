import React from "react";
import s from "./Banner.module.css";

interface IBanner {
  url: string;
  title: string;
  subtitle: string;
  type: string;
  textColor?: string
}

function Banner({ url, title, subtitle, type, textColor }: IBanner) {
  return (
    <div className={s.wrapper}>
      {type === "mp4" ? (
        <video
          width="1170px"
          src={`../img/afisha/${url}.mp4`}
          autoPlay={true}
          loop={true}
          controls={false}
        />
      ) : (
        <img src={`../img/afisha/${url}.${type}`} />
      )}
      <div className={s.ban_title} style={{color: `${textColor}`}}>
        {title} <span>{subtitle}</span>
      </div>
    </div>
  );
}

export default Banner;
