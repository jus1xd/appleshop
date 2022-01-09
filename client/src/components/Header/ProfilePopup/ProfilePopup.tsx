import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { logout } from "../../../store/actions/auth";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";

import s from "./ProfilePopup.module.css";

interface ProfilePopup {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  user: {};
}

function ProfilePopup({ active, setActive, user }: ProfilePopup) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logoutHandler = () => {
    dispatch(logout());
    setActive(false);
    router.push("/");
  };

  return (
    <>
      <div
        className={active ? `${s.main_wrapper} ${s.active}` : s.main_wrapper}
        onMouseOver={() => setActive(true)}
        onMouseOut={() => setActive(false)}
      >
        <div className={active ? `${s.wrapper} ${s.active}` : s.wrapper}>
          <div className={s.cur_profile}>
            <div className={s.avatar}>
              <img src="../img/header/profile.png" alt="" />
            </div>
            <div className={s.profile_name}>
              {
                //@ts-ignore
                Object.keys(user).length != 0
                  ? //@ts-ignore
                    jwtDecode(`${user.accessToken}`).username
                  : ""
              }
            </div>
          </div>
          <nav className={s.nav}>
            <div className={s.nav_item}>Профиль</div>
            <div className={s.nav_item}>Заказы</div>
            <div className={s.nav_item}>Поддержка</div>
            <div className={s.logout} onClick={() => logoutHandler()}>
              Выйти
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default ProfilePopup;
