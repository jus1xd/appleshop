import React, {useEffect} from 'react';
import Header from '../components/Header/Header';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {fetchAllProducts} from '../store/actions/fetchProducts';
import Card from '../components/Card/Card';

import s from '../styles/Compare.module.css';
import SpecItem from '../components/SpecItem/SpecItem';

const Compare = () => {
    const dispatch = useAppDispatch ();
    const userFromDB = useAppSelector ( ( state ) => state.authReducer );
    const compareItems = useAppSelector ( ( state ) => state.compareReducer.compareItems );

    useEffect ( () => {
        dispatch ( fetchAllProducts () );
    }, [] );

    const cards = compareItems.map ( ( product ) => (
        <Card user={userFromDB.user} key={product._id} product={product} compare={true}/>
    ) );

    const translateSpecs: Record<string, Record<string, string>> = {
        common: {
            producer: 'Производитель',
            series: 'Серия',
            category: 'Категория',
            guarantee: 'Гарантия',
            producerCountries: 'Страна производства',
            producerCode: 'Код производителя',
            releaseYear: 'Год выхода',
        },
        appearance: {
            bodyMaterial: 'Материал',
            color: 'Цвет',
        },
        screen: {
            screenDiagonal: 'Диагональ экрана',
            screenResolution: 'Разрешение экрана',
            pixelDensity: 'Плотность пикселей',
            screenTechnologyType: 'Тип матрицы',
        },
        system: {
            versionOS: 'Версия ОС',
            CPU: 'Процессор',
            Kernels: 'Ядра',
            cpuFrequency: 'Частота процессора',
            technicalProcess: 'Техпроцесс',
            memory: 'Память',
        },
        protection: {
            protect: 'Защита',
            protectType: 'Тип защиты',
            gradeIP: 'Степень защиты',
        },
        mainCamera: {
            mainCameras: 'Количество камер',
            mainCamerasMegapixels: 'Разрешение камеры',
            mainCamerasAperture: 'Диафрагма',
            autofocus: 'Автофокус',
            opticalStabilization: 'Оптическая стабилизация',
        },
        frontCamera: {
            doubleFrontCamera: 'Двойная фронтальная камера',
            frontCameraMegapixels: 'Разрешение фронтальной камеры',
            frontCameraAperture: 'Диафрагма фронтальной камеры',
            autofocus: 'Автофокус',
        },
        videoCapture: {
            videoFormat: 'Формат видео',
            videoResolutionFrequency: 'Разрешение записи видео',
        },
        audio: {
            stereo: 'Стерео',
            audioFormats: 'Формат аудио',
        },
        communications: {
            bluetooth: 'Bluetooth',
            nfc: 'NFC',
        },
        mobileConnection: {
            lteFreq: 'Частоты LTE',
            simFormat: 'Формат сим-карты',
            eSim: 'eSim',
            simsCount: 'Количество симкарт',
        },
        size: {
            width: 'Ширина',
            height: 'Высота',
            thickness: 'Толщина',
            weight: 'Вес',
        },
        battery: {
            chargerType: 'Тип аккумулятора',
            fastCharge: 'Быстрая зарядка',
            wirelessCharge: 'Беспроводная зарядка',
            musicWorkingTime: 'Время воспроизведения музыки',
            videoWorkingTime: 'Время воспроизведения видео',
        },
        package: {
            headphonesIncluded: 'Наушники в комплекте',
            chargerIncluded: 'Зарядное устройство в комплекте',
            complectation: 'Комплектация',
        },
    };

    Object.keys ( translateSpecs ).map ( ( el ) => `${translateSpecs[el]}` );

    const renderSpecifications = () => {
        const specs: Record<string, string[]> = {};
        const result: JSX.Element[] = [];
        compareItems.map ( ( el: any ) => {
            for (let i = 0; i < Object.keys ( el.specifications ).length; i++) {
                console.log ( 'for', el.specifications );
                for (const key in el.specifications[i]) {
                    console.log ( 'for in for', el.specifications[i] );
                    if (!specs[translateSpecs[key]]) specs[translateSpecs[key]] = [];
                    specs[translateSpecs[key]].push ( el.specifications[key] || '' );
                }
            }
        } );
        for (const key in specs) {
            result.push ( <SpecItem key={Math.random ()} specValue={specs[key]} translatedSpecItem={key}/> );
        }
        return result;
    };
    renderSpecifications ();
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
                                <div className={s.error_icon}>( o ^ ^ ) o</div>
                                <div className={s.error_title}>Нечего сравнивать</div>
                                <div className={s.error_subtitle}>
                                    Чтобы добавить товары в сравнение, кликните на кнопку “Сравнить” у товара
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