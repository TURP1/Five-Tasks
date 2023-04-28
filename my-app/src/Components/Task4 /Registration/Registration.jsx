import React from "react";
import style from '.././Task4.module.css';
import s from './Registration.module.css';
import registerImg from '../../../assets/4.jpg';
import Competitors from "./Competitors";
import FormRegister from "./FormRegister";



function Registration(
    { orderedShirts, orderedShirtsArrayDecrease, handleOrderMissing,
        competitorsList, registrationForm, addCompetitor, registerList
    }) {


    function orderMissing() {
        return orderedShirts.some(shirt => shirt.quantity < 0);
    }
    let mapLeftovers = orderedShirts.map((shirt, index) => {

        return (
            <div key={index} className={s.shirtListContainer}>
                <div>{shirt.name}</div>
                <div>{shirt.quantity}</div>
            </div>
        )
    })

    return (
        <div className={style.task3container}>
            <div className={style.leftSideHelper}>
                <div className={style.helperContainer}>Ok, let`s start registration </div>
                <img src={registerImg} alt="task4 Registration Helper" />
            </div>
            <div className={s.mainRegisterContainer}>
                <div className={s.registerContainer}>
                    {!registrationForm &&
                        <button className={style.helperContainer}
                            onClick={addCompetitor}
                        >Add Competitor</button>}
                    <div className={style.helperContainer}>
                        <div className={s.namingOfTheShirtList}> Shirts in store</div>
                        {mapLeftovers}
                    </div>
                    {orderMissing() && <button onClick={handleOrderMissing} className="submitBtn">Order missing t-shirts</button>}
                </div>
                {registrationForm
                    ? <FormRegister competitorsList={competitorsList} orderedShirtsArrayDecrease={orderedShirtsArrayDecrease}></FormRegister>
                    : <Competitors registerList={registerList}></Competitors>}
            </div>





        </div>

    )
}

export default Registration;