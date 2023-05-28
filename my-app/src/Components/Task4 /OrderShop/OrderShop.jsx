import React, { useEffect, useState } from "react";
import style from '.././Task4.module.css';
import buyerImg from '../../../assets/6.jpg';

import S from '../../../assets/task4/S.png'
import M from '../../../assets/task4/M.png'
import L from '../../../assets/task4/L.png'
import XL from '../../../assets/task4/XL.png'
import XXL from '../../../assets/task4/XXL.png'
import XXXL from '../../../assets/task4/XXXL.png'
import OrderItem from "./OrderItem";

let quantitySizes = [
    {
        name: "S",
        quantity: 0
    },
    {
        name: "M",
        quantity: 0
    },
    {
        name: "L",
        quantity: 0
    },
    {
        name: "XL",
        quantity: 0
    },
    {
        name: "XXL",
        quantity: 0
    },
    {
        name: "XXXL",
        quantity: 0
    },
]


function OrderShop({ orderedShirtsArray, orderedShirts }) {
    const [orderItems, setOrderItems] = useState(quantitySizes);
    const [missingItems, setMissingItems] = useState([]);

    useEffect(() => {
        if (orderedShirts.length) {
            let missingItemArray = orderedShirts.filter(item => item.quantity < 0)
            setMissingItems(missingItemArray)
        }
    }, [orderedShirts])


    function handleClangingCount(name, quantity) {
        setOrderItems(prevOrderItems =>
            prevOrderItems.map(orderItem => {
                if (orderItem.name === name) {
                    return {
                        ...orderItem,
                        quantity: quantity
                    }
                }
                return orderItem;
            })
        );
    }

    const onSubmit = () => {
        orderedShirtsArray(orderItems)

    }

    return (
        <div className={style.task3container}>
            <div className={style.leftSideHelper}>
                <div className={style.helperContainer}>Help manager to buy t-shirts </div>
                <img src={buyerImg} alt="task4helper" />
            </div>
            <div className={style.shopContainer}>
                <div>Help manager to buy t-shirts </div>
                <div className={style.shopShirtContainer}>
                    <OrderItem size={"S"} missingItems={missingItems} src={S} handleClangingCount={handleClangingCount}></OrderItem>
                    <OrderItem size={"M"} missingItems={missingItems} src={M} handleClangingCount={handleClangingCount}></OrderItem>
                    <OrderItem size={"L"} missingItems={missingItems} src={L} handleClangingCount={handleClangingCount}></OrderItem>

                </div>
                <div className={style.shopShirtContainer}>
                    <OrderItem size={"XL"} missingItems={missingItems} src={XL} handleClangingCount={handleClangingCount}></OrderItem>
                    <OrderItem size={"XXL"} missingItems={missingItems} src={XXL} handleClangingCount={handleClangingCount}></OrderItem>
                    <OrderItem size={"XXXL"} missingItems={missingItems} src={XXXL} handleClangingCount={handleClangingCount}></OrderItem>
                </div>
                <div onClick={onSubmit} className="submitBtn" >
                    Confirm order
                </div>

            </div>
        </div >

    )
}

export default OrderShop;