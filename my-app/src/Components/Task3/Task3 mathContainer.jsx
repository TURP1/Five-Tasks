import React, { useState } from 'react';
import ThirdTask from './Task3';

import kilogram from '../../assets/task3/p20.png'
import lbs from '../../assets/task3/p45lb.png'

function ThirdTaskMath() {
    const [answer, setAnswer] = useState(20);
    const [record, setNextRecord] = useState(21);
    const [weightArray, setWeightArray] = useState([]);
    const [programAnswer, setProgramAnswer] = useState("Try to beat 20 kg record");


    let handleOnClickAddToArray = (e) => {
        let weightToAdd = e.target.alt
        addToWeightArray(weightToAdd)
        e.target.classList.toggle("hide")
    }

    let handleOnClickDeleteFromArray = (e) => {
        let weightToDelete = e.target.alt
        let mySubtractAnswer = answer - Number(weightToDelete) * 2
        let newArray = (weightArray.filter(obj => obj.kilogram !== +weightToDelete));
        setWeightArray(newArray)
        e.target.classList.toggle("hide")
        setAnswer(mySubtractAnswer.toFixed(1))
        toggleHide(weightToDelete)
    }

    function toggleHide(alt) {
        let allAlts = Array.from(document.querySelectorAll("img"))
        let neededElement = (allAlts.filter(element => element.alt === alt).filter(element => !element.hasAttribute("title"))[0]);
        neededElement.classList.toggle("hide")
    }

    function addToWeightArray(weightText) {
        let myAddingAnswer = +answer + Number(weightText) * 2
        if (weightText === '20.4' || weightText === '15.9' || weightText === '11.3' || weightText === '4.5') {
            setWeightArray([...weightArray, { src: lbs, "kilogram": +weightText }])
        }
        else setWeightArray([...weightArray, { src: kilogram, "kilogram": +weightText }])
        setAnswer(myAddingAnswer)
    }

    function answerHandler() {
        setNextRecord(mathCalc())
        console.log(answer);
        console.log(record);

        answer === record
            ? setProgramAnswer(<div className="right_answer">You're right, the next record is - {record} kg, with minimum cost of forces</div> )
            : setProgramAnswer(<div className="wrong_answer">Wrong, another person picked up new record - {record} kg, with minimum cost of forces</div>)
    }


    // Math Calculations

    function mathCalc() {
        const weights = [0.5, 1, 2.5, 4.5, 5, 10, 11.3, 15, 15.9, 20, 20.4, 25];
        let maxWeight = record; // максимальний рекорд, який потрібно перевершити
        const barWeight = 20; // вага грифа на штанзі

        // функція, яка знаходить всі можливі комбінації ваг
        function getCombinations(weights) {
            let result = [[]];
            for (let weight of weights) {
                const newCombinations = result.map(combination => [...combination, weight]);
                result.push(...newCombinations);
            }
            return result;
        }

        // функція, яка перевіряє чи можна використовувати даний навантажувач в комбінації
        function canUse(weight, usedWeights) {
            return usedWeights.filter(w => w === weight).length < 2;
        }

        // функція, яка знаходить мінімальну вагу, яка перевищує максимальний рекорд
        function findNextMinWeight(weights, maxWeight, barWeight) {
            let minWeight = Infinity;
            const combinations = getCombinations(weights);
            for (let combination of combinations) {
                const totalWeight = combination.reduce((sum, weight) => sum + weight * 2, barWeight);
                if (totalWeight > maxWeight && totalWeight < minWeight && combination.every((w, i) => canUse(w, combination.slice(0, i)))) {
                    minWeight = totalWeight;
                }
            }
            return minWeight;
        }

        // знаходимо мінімальну вагу, яка перевищує максимальний рекорд
        return findNextMinWeight(weights, maxWeight, barWeight);
    }

    return <ThirdTask addToWeightArray={handleOnClickAddToArray} deleteFromWeightArray={handleOnClickDeleteFromArray}
        weightArray={weightArray} answer={answer} answerHandler={answerHandler} programAnswer={programAnswer}></ThirdTask>

}

export default ThirdTaskMath;


