import React from 'react';
import { useForm } from 'react-hook-form';
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import style from './Task1.module.css'

function FirstTask({ taskOneMathFunction, answer, secondNumber }) {


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        taskOneMathFunction(data)
    }

    return (
        <div>
            <div className="task">
                <p> Завдання 1.  Два друга грають у гру, вони обидва загадують число.
                    Перший повинен перетворити одне число на інше за допомогою множення цього числа на 2 (10 * 2 = 20) або додаванням одиниці праворуч (10 + 1 = 101).

                    Потрібно написати програму, яка буде знаходити, чи можливо одне число перетворити на інше, використовуючи лише перераховані вище операції.
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.container}>

                    <div className={style.person}>
                        <div className={style.queryGroup}>
                            <input className={style.input} type="number" placeholder="firstNumber" {...register("firstNumber", { required: true })} />
                            <input className={style.input} type="number" placeholder="secondNumber" {...register("secondNumber", { required: true })} />
                        </div>
                        <div className={style.imageContainer}>
                            <img src={img1} alt="testImg1" />
                        </div>
                        <div className="submit">
                            <input type="submit"  value="Check Numbers"/>
                        </div>

                    </div>

                    <div className={style.person}>
                        <div className={style.output}>
                            {answer === -2 && `please enter your numbers`}
                            {answer === -1 && `you can't get ${secondNumber} number`}
                            {answer === 0 && `you typed 2 same values`}
                            {answer > 0 && `you can have ${secondNumber} in ${answer} iteration`}


                        </div>
                        <div className={style.imageContainer}>
                            <img src={img2} alt="testImg2" />
                        </div>

                    </div>

                </div>
            </form>
        </div>

    );
}

export default FirstTask;




