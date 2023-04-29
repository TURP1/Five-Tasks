import React, { useEffect, useState } from "react";
import style from '.././Task4.module.css';



function OrderItem({ size, src, handleClangingCount, missingItems }) {
    const [orderItem, setOrderItem] = useState(0)

    useEffect(() => {
        if (missingItems.some(item => item.name === size)) {
            let element = missingItems.find(item => item.name === size).quantity
            setOrderItem(Math.abs(element));
        }
     }, [missingItems])
    
    function handlePlus() {
        setOrderItem(orderItem + 1)
    }
    function handleMinus() {
        orderItem !== 0 && setOrderItem(orderItem - 1)
    }
    function onBlur() {
        orderItem >= 0 && handleClangingCount(size, orderItem)
    }




    return (
        <div className={style.itemContainer}>
            <div className={style.imageT_shirt}>
                <div className={style.itemHover}>
                    <div onMouseLeave={onBlur} className={style.itemHoverContainer}>
                        <div>T-SHIRT</div>
                        <div>AGILE </div>
                        <div>{size}-SIZE</div>
                        <div className={style.order}>ORDER {orderItem}</div>
                        <div className={style.orderButtons}>
                            <div onClick={handleMinus}>-</div>
                            <div onClick={handlePlus}>+</div>
                        </div>
                    </div>
                </div>
                <img src={src} alt={`small ${size}-shirt`} />
            </div>

            <span>Order {orderItem}
                {orderItem <= 1
                    ? " item"
                    : " item's"}
            </span>
        </div>

    )
}

export default OrderItem;