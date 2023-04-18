import React, { useState } from 'react';
import ThirdTask from './Task3';

import kilogram from '../../assets/task3/p20.png'
import lbs from '../../assets/task3/p45lb.png'

function ThirdTaskMath() {
    const [answer, setAnswer] = useState(20);
    const [weightArray, setWeightArray] = useState([]);

    let handleOnClickAddToArray = (e) => {
        let weightToAdd = e.target.alt
        console.log(e);
        console.log(e.target);
        addToWeightArray(weightToAdd)
        e.target.classList.toggle("hide")
    }

    let handleOnClickDeleteFromArray = (e) => {
        let weightToDelete = e.target.alt
        console.log(e);
        console.log(e.target);
        let mySubtractAnswer = answer - Number(weightToDelete) * 2
        let newArray = (weightArray.filter(obj => obj.kilogram !== +weightToDelete));
        setWeightArray(newArray)
        e.target.classList.toggle("hide")
        setAnswer(mySubtractAnswer)
        toggleHide(weightToDelete)
    }
    function toggleHide(alt) {

        let allAlts = Array.from(document.querySelectorAll("img"))

        let neededElement = (allAlts.filter(element => element.alt === alt).filter(element => !element.hasAttribute("title"))[0]);
        neededElement.classList.toggle("hide")





    }

    function addToWeightArray(weightText) {
        let myAddingAnswer = answer + Number(weightText) * 2

        if (weightText === '20.4' || weightText === '15.9' || weightText === '11.3' || weightText === '4.5') {
            setWeightArray([...weightArray, { src: lbs, "kilogram": +weightText }])
        }
        else setWeightArray([...weightArray, { src: kilogram, "kilogram": +weightText }])

        setAnswer(myAddingAnswer)
    }

    return <ThirdTask addToWeightArray={handleOnClickAddToArray} deleteFromWeightArray={handleOnClickDeleteFromArray}
        weightArray={weightArray} answer={answer}></ThirdTask>
}

export default ThirdTaskMath;


