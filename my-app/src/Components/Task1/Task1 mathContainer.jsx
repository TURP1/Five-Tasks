import React, { useEffect, useState } from 'react';
import FirstTask from './Task1';

function FirstTaskMath() {
    const [answer, setAnswer] = useState(-2);
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();

    useEffect(() => {
        if (num1 !== undefined && num2 !== undefined) {
            canTransform(num1, num2, (result) => {
                setAnswer(result);
            });
        }
    }, [num1, num2]);

    let taskOneMathFunction = (dataJSON) => {
        let data = JSON.parse(dataJSON)
        setNum1(+data.firstNumber);
        setNum2(+data.secondNumber);
        canTransform(num1, num2)
    }

    function canTransform(num1, num2) {
        let visited = new Set();  // множина відвіданих чисел
        let queue = [[num1, 0]];  // черга з початковим числом та його кроком
        let iterations = 0;


        while (queue.length > 0 && iterations < 1000) {
            iterations++;

            let [num, steps] = queue.shift();  // вибираємо перше число з черги
            if (num === num2) {  // якщо ми знайшли шукане число, повертаємо кількість кроків
                setAnswer(steps);
                return
            }
            visited.add(num);  // додаємо число до множини відвіданих
            let double = num * 2;
            let addOne = parseInt(num.toString() + '1');  // додаємо 1 зправа
            if (!visited.has(double)) {  // якщо ми ще не відвідали число, множимо його на 2 та додаємо до черги
                queue.push([double, steps + 1]);
            }
            if (!visited.has(addOne)) {  // якщо ми ще не відвідали число, додаємо 1 зправа та додаємо до черги
                queue.push([addOne, steps + 1]);
            }

        }
        setAnswer(-1);

    }


    return <FirstTask taskOneMathFunction={taskOneMathFunction} answer={answer} secondNumber={num2}></FirstTask>
}

export default FirstTaskMath;




