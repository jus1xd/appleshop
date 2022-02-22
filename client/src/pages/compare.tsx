import React, {useEffect} from "react";
import Header from "../components/Header/Header";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchAllProducts} from "../store/actions/fetchProducts";
import Card from "../components/Card/Card";
import s from "../styles/Compare.module.css";
import SpecItem from "../components/SpecItem/SpecItem";

const Compare = () => {
    const dispatch = useAppDispatch ();
    const userFromDB = useAppSelector ( ( state ) => state.authReducer );
    const compareItems = useAppSelector (
        ( state ) => state.compareReducer.compareItems
    );

    useEffect ( () => {
        dispatch ( fetchAllProducts () );
    }, [] );

    const cards = compareItems.map ( ( product ) => (
        <Card
            user={userFromDB.user}
            key={product._id}
            product={product}
            compare={true}
        />
    ) );

    const translateSpecs: Record<string, string> = {
        color: "Цвет",
        bodyMaterial: "Материал",
        protect: "Защита",
        protectType: "Тип защиты",
        gradeIP: "Степень защиты",
        versionOS: "Версия ОС",
        CPU: "Процессор",
        Kernels: "Ядра",
        cpuFrequency: "Частота процессора",
        technicalProcess: "Техпроцесс",
        memory: "Память",
        mainCameras: "Количество камер",
        mainCamerasMegapixels: "Разрешение камеры",
        mainCamerasAperture: "Диафрагма",
        videoFormat: "Формат видео",
        videoResolutionFrequency: "Разрешение записи видео",
        doubleFrontCamera: "Двойная фронтальная камера",
        frontCameraMegapixels: "Разрешение фронтальной камеры",
        frontCameraAperture: "Диафрагма фронтальной камеры",
        autofocus: "Автофокус",
        headphonesIncluded: "Наушники в комплекте",
        chargerIncluded: "Зарядное устройство в комплекте",
        chargerType: "Тип аккумулятора",
        fastCharge: "Быстрая зарядка",
        wirelessCharge: "Беспроводная зарядка",
        musicWorkingTime: "Время воспроизведения музыки",
        videoWorkingTime: "Время воспроизведения видео",
        width: "Ширина",
        height: "Высота",
        thickness: "Толщина",
        weight: "Вес",
        guarantee: "Гарантия",
        producerCountries: "Страна производства",
        producerCode: "Код производителя",
        releaseYear: "Год выхода",
        screenDiagonal: "Диагональ экрана",
        screenResolution: "Разрешение экрана",
        pixelDensity: "Плотность пикселей",
        screenTechnologyType: "Тип матрицы",
    };

    function translate (): any {
        return Object.keys ( translateSpecs ).map ( ( el ) => `${translateSpecs[el]}` );
    }
    translate ();
    const renderSpecifications = () => {
        const specs: Record<string, string[]> = {};
        const result: JSX.Element[] = [];
        compareItems.map ( ( el: any ) => {
            for (const key in el.specifications) {
                if (!specs[translateSpecs[key]]) specs[translateSpecs[key]] = [];
                specs[translateSpecs[key]].push ( el.specifications[key] || '' );
            }
        } );
        for (const key in specs) {
            result.push ( <SpecItem key={Math.random()} specValue={specs[key]} translatedSpecItem={key}/> );
        }
        console.log (result)
      return result
    };
    renderSpecifications()
    return (
        <>
            <Header/>
            <div className={s.compare}>
                <div className={s.container}>
                    <div className={s.section_inner}>
                        <div className={s.section_header}>
                            <div className={s.section_title}>Сравнить</div>
                            <div className={s.compare_btn}>Показать различия</div>
                        </div>
                        {cards.length > 0 ? (
                            <>
                                <div className={s.cards_wrapper}>
                                    <div className={s.product_cards}>{cards}</div>
                                </div>
                                <div className={s.specs}>
                                    <div className={s.global_spec}>Основные характеристики</div>
                                    {}
                                </div>
                            </>
                        ) : (
                            <div className={s.error_wrapper}>
                                <div className={s.error_icon}>( o ^ ^ )
                                o</div>
                                <div className={s.error_title}>Нечего сравнивать</div>
                                <div className={s.error_subtitle}>
                                    Чтобы добавить товары в сравнение, кликните на кнопку
                                    “Сравнить” у товара
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Compare;
