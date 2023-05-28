import React, { useRef, useState } from "react";
import s from './Registration.module.css';

import S from '../../../assets/task4/S_choosing.png'
import M from '../../../assets/task4/M_choosing.png'
import L from '../../../assets/task4/L_choosing.png'
import XL from '../../../assets/task4/XL_choosing.png'
import XXL from '../../../assets/task4/XXL_choosing.png'
import XXXL from '../../../assets/task4/XXXL_choosing.png'


function FormRegister({competitorsList, orderedShirtsArrayDecrease}) {

    let sizes = [
        {
            size: "S",
            src: S,
            checked: false
        },
        {
            size: "M",
            src: M,
            checked: false
        },
        {
            size: "L",
            src: L,
            checked: false
        },
        {
            size: "XL",
            src: XL,
            checked: false
        },
        {
            size: "XXL",
            src: XXL,
            checked: false
        },
        {
            size: "XXXL",
            src: XXXL,
            checked: false
        },
    ]

    const [chooseSize, setChooseSize] = useState(sizes)
    const nameInputRef = useRef(null);

    function filterAdjacentSizes(alt) {
        chooseSize.filter(el => {
            if (el.size === alt) {
                let chooseIndex = chooseSize.indexOf(el);
                if (el.checked) {
                    el.checked = false
                }
                else el.checked = true

                firstFilterArray(chooseIndex)
                return el
            }
        })

        function firstFilterArray(chooseIndex) {
            const filteredArr = chooseSize.filter((_, i) => i >= chooseIndex - 1 && i <= chooseIndex + 1);
            setChooseSize(filteredArr)
            return filteredArr;
        }

    }

    function choosingSize(e) {
        let choosingElementLight = e.target.previousElementSibling;
        if (choosingElementLight) {
            filterAdjacentSizes(e.target.alt);
            choosingElementLight.classList.remove("hide")
        }
        else e.target.classList.add("hide")
    }

    let handleSubmitUser = (competitorsList) => {
        let submitSize = chooseSize.filter(el => el.checked === true);
        if (nameInputRef.current.value && submitSize ) {
            competitorsList(nameInputRef.current.value, submitSize)
            orderedShirtsArrayDecrease(submitSize)
        }

    }

    let mapSizes = chooseSize.map(size => {
        return (
            <div key={size.size} className={s.imageT_shirt} onClick={choosingSize}>
                <div className={s.hoverImg + " hide"}></div>
                <img src={size.src} alt={size.size} />
            </div>
        )
    })
    return (
        <div className={s.registerForm}>
            <div className={s.namingOfTheCompetitorsList}>Register Data</div>
            <div className={s.formContainer}>
                <div className={s.formList}>
                    <div>Name</div>
                    <input className={s.nameInput} type="text" ref={nameInputRef} />
                </div>
                <div className={s.namingOfChoosingShirt}>
                    Choose your t-shirt Size
                </div>
                <div className={s.tipsOfChoosingShirt}>
                    (You can choose 2 two adjacent t-shirts)
                </div>
                <div className={s.formSizeChoosing}>
                    {mapSizes}
                </div>
                <div className="submitBtn" onClick={()=>handleSubmitUser(competitorsList)}>Submit Person</div>
            </div>
        </div>
    )
}

export default FormRegister;

