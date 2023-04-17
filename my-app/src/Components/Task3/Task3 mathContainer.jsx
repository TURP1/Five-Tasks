import React, { useState } from 'react';
import ThirdTask from './Task3';

function ThirdTaskMath() {
    const [answer, setAnswer] = useState(20)
    function chooseWeightArray(weightText) {
        let myAnswer = answer + Number(weightText) * 2
        
        setAnswer(myAnswer)
    }

    return <ThirdTask chooseWeightArray={chooseWeightArray} answer={answer}></ThirdTask>
}

export default ThirdTaskMath;


