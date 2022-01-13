import React, {useEffect, useState} from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import s from "../styles/Index.module.css";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchAllProducts} from "../store/actions/fetchProducts";
import {refresh} from "../store/actions/auth";

const Index = () => {
    const dispatch = useAppDispatch ();
    const products = useAppSelector ( ( state ) => state.productsReducer.products );
    const userFromDB = useAppSelector ( ( state ) => state.authReducer.user );
    useEffect ( () => {
        dispatch ( fetchAllProducts () );
        userFromDB !== undefined ? dispatch ( refresh () ) : ''
    }, [] );
    const cards = products.map ( ( product ) => (
        <Card user={userFromDB} key={product._id} product={product}/>
    ) );
    return (
        <>
            <Header/>
            <section className={s.intro}>
                <div className={s.intro_inner}>
                    <div className={s.intro_head}>
                        <h2 className={s.intro_text}>iPhone 13 Pro</h2>
                        <h3 className={s.intro_subtext}>Просто. Нереально</h3>
                    </div>
                </div>
            </section>
            <section className={s.heatsells}>
                <div className={s.container}>
                    <div className={s.section_title}>Хиты продаж</div>
                    <div className={s.heat_inner}>{cards.slice ( 0, 8 )}</div>
                    <Banner
                        url="airpods"
                        title="Попробуйте"
                        subtitle="AirPods"
                        type="mp4"
                    />
                    <div className={s.heat_inner}>{cards.slice ( 8, 16 )}</div>
                    <Banner
                        url="macbook"
                        title="Попробуйте"
                        subtitle="MacBook"
                        type="png"
                    />
                </div>
            </section>
        </>
    );
};
export default Index;
