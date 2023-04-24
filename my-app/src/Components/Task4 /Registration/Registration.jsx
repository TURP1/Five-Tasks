import React, { useState } from "react";
import style from '.././Task4.module.css';
import s from './Registration.module.css';
import registerImg from '../../../assets/4.jpg';
import Competitors from "./Competitors";
import FormRegister from "./FormRegister";




function Registration({ }) {
    const [registrationForm, setRegistrationForm] = useState(false);
    const [registerList, setRegisterList] = useState([]);

    function competitorsList(nameValue, submitSize) {
        setRegisterList([...registerList, { name: nameValue, size: submitSize }])
        setRegistrationForm(false)
    }

    function addCompetitor() {
        setRegistrationForm(true)
    }

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
                        <div className={s.shirtListContainer}>
                            <div>Name</div>
                            <div>Size</div>
                        </div>
                        <div className={s.shirtListContainer}>
                            <div>Name</div>
                            <div>Size</div>
                        </div>
                        <div className={s.shirtListContainer}>
                            <div>Name</div>
                            <div>Size</div>
                        </div>
                        <div className={s.shirtListContainer}>
                            <div>Name</div>
                            <div>Size</div>
                        </div>
                        <div className={s.shirtListContainer}>
                            <div>Name</div>
                            <div>Size</div>
                        </div>
                        <div className={s.shirtListContainer}>
                            <div>Name</div>
                            <div>Size</div>
                        </div>
                    </div>
                </div>
                {registrationForm
                    ? <FormRegister competitorsList={competitorsList}></FormRegister>
                    : <Competitors registerList={registerList}></Competitors>}
            </div>





        </div>

    )
}

export default Registration;