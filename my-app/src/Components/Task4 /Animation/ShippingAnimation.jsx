import React, { useEffect, useState } from "react";
import style from './ShippingAnimation.module.css';

import store from '../../../assets/store.svg'
import homeStore from '../../../assets/homeStore.png'
import car from '../../../assets/car.png'



function ShippingAnimation({}) {
 
    return (
      <div className={style.animateContainer}>
        <img src={store} alt="Store"  />
        <img className={style.car} src={car} alt="Car"  />
        <img src={homeStore} alt="Home store"  />
      </div>
    )
}

export default ShippingAnimation;