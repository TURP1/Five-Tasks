import React, { useState } from "react";
import s from './Registration.module.css';

import S from '../../../assets/task4/S_choosing.png'
import M from '../../../assets/task4/M_choosing.png'
import L from '../../../assets/task4/L_choosing.png'
import XL from '../../../assets/task4/XL_choosing.png'
import XXL from '../../../assets/task4/XXL_choosing.png'
import XXXL from '../../../assets/task4/XXXL_choosing.png'
function FormRegister({ }) {

    const [chooseSize, setChooseSize] = useState()

    function choosingSize(e) {



        e.target.previousElementSibling.style.display = "block"
    }
    return (
        <div className={s.registerForm}>
            <div className={s.namingOfTheCompetitorsList}>Register Data</div>
            <div className={s.formContainer}>
                <div className={s.formList}>
                    <div>Name</div>
                    <input className={s.nameInput} type="text" />
                </div>
                <div className={s.namingOfChoosingShirt}>
                    Choose your t-shirt Size
                </div>
                <div className={s.tipsOfChoosingShirt}>
                    (You can choose 2 two adjacent t-shirts)
                </div>
                <div className={s.formSizeChoosing}>
                    <div className={s.imageT_shirt} onClick={choosingSize}>
                        <div className={s.hoverImg}></div>
                        <img src={S} alt="S" />
                    </div>
                    <div className={s.imageT_shirt}>
                        <div className={s.hoverImg}></div>
                        <img src={M} alt="M" />
                    </div>
                    <div className={s.imageT_shirt}>
                        <div className={s.hoverImg}></div>
                        <img src={L} alt="L" />
                    </div>
                    <div className={s.imageT_shirt}>
                        <div className={s.hoverImg}></div>
                        <img src={XL} alt="XL" />
                    </div>
                    <div className={s.imageT_shirt}>
                        <div className={s.hoverImg}></div>
                        <img src={XXL} alt="XXL" />
                    </div>
                    <div className={s.imageT_shirt}>
                        <div className={s.hoverImg}></div>
                        <img src={XXXL} alt="XXXL" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FormRegister;