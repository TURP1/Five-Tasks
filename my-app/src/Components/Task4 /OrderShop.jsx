import React, { useEffect, useState } from "react";
import style from './Task4.module.css';
import buyerImg from '../../assets/6.jpg';

import S from '../../assets/task4/S.png'
import M from '../../assets/task4/M.png'
import L from '../../assets/task4/L.png'
import XL from '../../assets/task4/XL.png'
import XXL from '../../assets/task4/XXL.png'
import XXXL from '../../assets/task4/XXXL.png'

function OrderShop() {


    return (
        <>
            <div className={style.leftSideHelper}>
                <div className={style.helperContainer}>Help manager to buy t-shirts </div>
                <img src={buyerImg} alt="task4helper" />
            </div>
            <div className={style.shopContainer}>
                <div>Help manager to buy t-shirts </div>
                <div className={style.shopShirtContainer}>
                    <div className={style.itemContainer}>
                        <div className={style.imageT_shirt}>
                            <div className={style.itemHover}></div>
                            <img src={S} alt="small T-shirt" />
                        </div>

                        <span>Order XXXX item`s</span>
                    </div>
                    <div className={style.itemContainer}>
                        <div className={style.imageT_shirt}>
                            <div className={style.itemHover}></div>
                            <img src={M} alt="medium T-shirt" />
                        </div>
                    </div>
                    <div className={style.itemContainer}>
                        <div className={style.imageT_shirt}>
                            <div className={style.itemHover}></div>
                            <img src={L} alt="large T-shirt" />
                        </div>
                        <span>Order XXXX item`s</span>
                    </div>
                </div>
                <div className={style.shopShirtContainer}>
                    <div className={style.itemContainer}>
                        <div className={style.imageT_shirt}>
                            <div className={style.itemHover}></div>
                            <img src={XL} alt="Xlarge T-shirt" />
                        </div>
                        <span>Order XXXX item`s</span>
                    </div>
                    <div className={style.itemContainer}>
                        <div className={style.imageT_shirt}>
                            <div className={style.itemHover}></div>
                            <img src={XXL} alt="XXlarge T-shirt" />
                        </div>
                        <span>Order XXXX item`s</span>
                    </div>
                    <div className={style.itemContainer}>
                        <div className={style.imageT_shirt}>
                            <div className={style.itemHover}></div>
                            <img src={XXXL} alt="XXXlarge T-shirt" />
                        </div>
                        <span>Order XXXX item`s</span>
                    </div>
                </div>
                <div className={style.confirmBtn}>
                    Confirm order
                </div>

            </div>
        </>

    )
}

export default OrderShop;