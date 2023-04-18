import React, { useState } from 'react';
import ThirdTask from './Task3';

import kilogram from '../../assets/task3/p20.png'
import lbs from '../../assets/task3/p45lb.png'

function ThirdTaskMath() {
    const [answer, setAnswer] = useState(20);
    const [weightArray, setWeightArray] = useState([]);

    let handleOnClick = (e) => {
        addToWeightArray(e.target.alt)
        e.target.classList.add("hide")
    }

    function addToWeightArray(weightText) {
        let myAnswer = answer + Number(weightText) * 2
        
        if (weightText === '20.4' || weightText === '15.9' || weightText === '11.3' || weightText === '4.5') {
            setWeightArray([...weightArray, { src: lbs, "kilogram": +weightText }])
        }
        else setWeightArray([...weightArray, { src: kilogram, "kilogram": +weightText }])

        setAnswer(myAnswer)
    }

    return <ThirdTask addToWeightArray={handleOnClick} weightArray={weightArray}  answer={answer}></ThirdTask>
}

export default ThirdTaskMath;


