import React from "react";
import {useAppDispatch} from "../../../hooks/redux";
import {logout} from "../../../store/actions/auth";
import {useRouter} from "next/router";
import s from "./ProfilePopup.module.css";
import {AuthReducer} from "../../../types";

interface ProfilePopup {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    authState: AuthReducer
}

function ProfilePopup ( {active, setActive, authState}: ProfilePopup ) {
    const dispatch = useAppDispatch ();
    const router = useRouter ();
    const logoutHandler = () => {
        dispatch ( logout () );
        setActive ( false );
        router.push ( "/" );
    };
    return (
        <>
            <div
                className={active ? `${s.main_wrapper} ${s.active}` : s.main_wrapper}
                onMouseOver={() => setActive ( true )}
                onMouseOut={() => setActive ( false )}
            >
                <div className={active ? `${s.wrapper} ${s.active}` : s.wrapper}>
                    <div className={s.cur_profile}>
                        <div className={s.avatar}>
                            <img src="../img/header/profile.png" alt=""/>
                        </div>
                        <div className={s.profile_name}>
                            {
                                authState ? authState?.user?.username : ""
                            }
                        </div>
                    </div>
                    <nav className={s.nav}>
                        <div className={s.nav_item}>Профиль</div>
                        <div className={s.nav_item}>Заказы</div>
                        <div className={s.nav_item}>Поддержка</div>
                        <div className={s.logout} onClick={() => logoutHandler ()}>
                            Выйти
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default ProfilePopup;
