import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {addToCart, changeQuantity, fetchOneProduct} from "../../store/actions/fetchProducts";
import {addToLocalCart} from "../../store/slices/mainSlice";
import s from "./ProductInfo.module.css";
import jwtDecode from "jwt-decode";

function ProductInfo () {
    const {query} = useRouter ();
    const id: any = query.id;
    useEffect ( () => {
        dispatch ( fetchOneProduct ( id ) );
    }, [] );
    const dispatch = useAppDispatch ();
    const cart = useAppSelector ( state => state.productsReducer.cart )
    const user = useAppSelector ( state => state.authReducer.user )
    const product = useAppSelector ( state => state.productReducer )
    const [productId, setProductId] = useState<string> ( "" );
    useEffect ( () => {
        if (productId && Object.keys ( user ).length != 0) {
            cart.every ( item => item.id !== productId ) ?
                dispatch (
                    addToCart ( {
                        //@ts-ignore
                        userId: jwtDecode ( `${user.accessToken}` ).id,
                        productId: productId,
                        price: product.price
                    } )
                ) :
                dispatch ( changeQuantity ( {
                    //@ts-ignore
                    userId: jwtDecode ( `${user.accessToken}` ).id,
                    productId: productId,
                    //@ts-ignore
                    quantity: cart.find ( product => product.id == productId ).quantity + 1
                } ) )
        } else if (productId) {
            dispatch ( addToLocalCart ( {
                id: productId,
                quantity: 1,
                price: product.price
            } ) )
        }
    }, [productId] );

    return (
        <div className={s.product_inner}>
            <div className={s.photo_section}>
                <img src={`http://localhost:5000/${product.picture}`} alt=""/>
            </div>
            <div className={s.info_section}>
                <div className={s.section_title}>{product.title}</div>
                <div className={s.product_cost}>{product.price} ₽</div>
                <div className={s.main_btn} onClick={() => setProductId ( id )}>
                    Добавить в корзину
                </div>
                <div className={s.prod_title}>Описание</div>
                <div className={s.prod_subtitle}>{product.subTitle}</div>
                <div className={s.prod_title}>Характеристики</div>
                <div className={s.spec_title}>Общие характеристики</div>
                <div className={s.spec_wrapper}>
                    <div className={s.spec_condit}>Операционная система:</div>
                    <div className={s.spec_value}>iOS</div>
                </div>
                <div className={s.spec_wrapper}>
                    <div className={s.spec_condit}>Модель:</div>
                    <div className={s.spec_value}>iPhone 13 128gb</div>
                </div>
                <div className={s.spec_wrapper}>
                    <div className={s.spec_condit}>Версия ОС:</div>
                    <div className={s.spec_value}>macOS 15.1</div>
                </div>
                <div className={s.spec_wrapper}>
                    <div className={s.spec_condit}>Гарантийный срок:</div>
                    <div className={s.spec_value}>2 года</div>
                </div>
                <div className={s.spec_title}>Экран</div>
                <div className={s.spec_wrapper}>
                    <div className={s.spec_condit}>Диагональ экрана:</div>
                    <div className={s.spec_value}>6.1
                        ''
                    </div>
                </div>
                <div className={s.spec_wrapper}>
                    <div className={s.spec_condit}>Разрешение экрана:</div>
                    <div className={s.spec_value}>1600
                        x2560
                    </div>
                </div>
                <div className={s.spec_wrapper}>
                    <div className={s.spec_condit}>Тип матрицы:</div>
                    <div className={s.spec_value}>IPS</div>
                </div>
                <div className={s.spec_title}>Процессор</div>
                <div className={s.spec_wrapper}>
                    <div className={s.spec_condit}>Процессор:</div>
                    <div className={s.spec_value}>Apple Bionic A15</div>
                </div>
                <div className={s.spec_wrapper}>
                    <div className={s.spec_condit}>Количество ядер:</div>
                    <div className={s.spec_value}>8</div>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;
