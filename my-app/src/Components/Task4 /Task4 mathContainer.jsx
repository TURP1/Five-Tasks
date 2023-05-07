import React, { useState } from 'react';
import FourthTask from './Task4';


function FourthTaskMath() {
    const [orderShop, setOrderShop] = useState(true)
    const [orderedShirts, setOrderedShirts] = useState([]);
    const [shippingAnimation, setShippingAnimation] = useState(false);

    const [registration, setRegistration] = useState(false);
    const [registerList, setRegisterList] = useState([]);
    const [registrationForm, setRegistrationForm] = useState(false);

    function animationDirector() {
        setShippingAnimation(true);
        setTimeout(() => {
            setShippingAnimation(false);
            setRegistration(true);
        }, 5000);
    }

    function handleOrderMissing() {
        setOrderShop(true);
        setRegistration(false);
    }

    function orderedShirtsArray(array) {
        let sumArrays = orderedShirts.map((item, index) => {
            if (item.quantity <= 0 && array[index].quantity <= 0) {
                return { ...item };
            } else {
                return {
                    ...item,
                    quantity: item.quantity + array[index].quantity,
                };
            }
        });

        if (orderedShirts.length) {
            setOrderedShirts(sumArrays);
        }
        else setOrderedShirts(array);

        setOrderShop(false);
        animationDirector();
    }
    
    function orderedShirtsArrayDecrease(submitSize) {
        let size = submitSize[0].size;
        if (submitSize.length === 1) {
            orderedShirts.forEach(t => {
                if (t.name === size) {
                    t.quantity -= 1
                }
            })
            setOrderedShirts([...orderedShirts])
        }
        else {
            let size2 = submitSize[1].size;
            orderedShirts.forEach(t => {
                if (t.name === size || t.name === size2) {
                    t.quantity -= 1
                }
            })
            setOrderedShirts([...orderedShirts])
        }

    }

    function competitorsList(nameValue, submitSize) {
        setRegisterList([...registerList, { name: nameValue, size: submitSize }])
        setRegistrationForm(false)
    }

    function addCompetitor() {
        setRegistrationForm(true)
    }

    return <FourthTask
        orderShop={orderShop} orderedShirtsArray={orderedShirtsArray}
        shippingAnimation={shippingAnimation} registration={registration}
        orderedShirts={orderedShirts} orderedShirtsArrayDecrease={orderedShirtsArrayDecrease}
        handleOrderMissing={handleOrderMissing} competitorsList={competitorsList}
        registrationForm={registrationForm} addCompetitor={addCompetitor}
        registerList={registerList}>
    </FourthTask>
}

export default FourthTaskMath;


