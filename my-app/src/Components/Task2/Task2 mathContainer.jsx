import React, { useState } from 'react';
import SecondTask from './Task2';

function SecondTaskMath() {
    const [state, setState] = useState({
        items: [
            { name: "first array Item", duplicated: false }
        ]
    });


    let taskTwoMathFunction = (data) => {
        const newArray = [...state.items, { name: data.arrayValue, duplicated: false }];

        for (let i = 0; i < newArray.length; i++) {
            for (let j = i + 1; j < newArray.length; j++) {
                if (newArray[i].name === newArray[j].name) {
                    newArray[i] = { ...newArray[i], duplicated: true }
                    newArray[j] = { ...newArray[j], duplicated: true }
                }
            }
        }
        setState({
            items: newArray
        })
    }


    return <SecondTask SecondTask taskTwoMathFunction={taskTwoMathFunction} arrayObj={state} ></SecondTask >
}

export default SecondTaskMath;


