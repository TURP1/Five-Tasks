import React, { useState } from 'react';
import FourthTask from './Task4';


function FourthTaskMath() {
    const [orderShop, setOrderShop] = useState(false)
    const [orderedSkirts, setOrderedSkirts] = useState([]);
    const [shippingAnimation, setShippingAnimation] = useState(false);
    const [registration, setRegistration] = useState(true);

    function animationDirector() {
        setShippingAnimation(true);
        setTimeout(() => {
            setShippingAnimation(false);
            setRegistration(true);
        }, 5000);
    }

    function orderedShirtsArray(array) {
        setOrderedSkirts(array);
        setOrderShop(false);
        animationDirector()
    }

    return <FourthTask orderShop={orderShop} orderedShirtsArray={orderedShirtsArray}
        shippingAnimation={shippingAnimation} registration={registration}></FourthTask>
}

export default FourthTaskMath;


