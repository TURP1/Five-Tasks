import React from 'react';
import { useForm } from 'react-hook-form';
import style from './Task2.module.css'

function SecondTask({ arrayObj, taskTwoMathFunction }) {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        taskTwoMathFunction(data)
        reset();
    }


    let mappingArray = arrayObj.items.map((item, index) => {
        if (item.duplicated) {
            return <div key={index} className={style.capsule + " " + style.duplicated}>{item.name}</div>
        }
        else return <div key={index} className={style.capsule}>{item.name}</div>

    })

    return (
        <div>
            <div className="task">
                <p>  Завдання 2.   Масив "arr" довжиною n+1 містить натуральні числа від 1 до n. Знайдіть будь-який елемент, що повторюється в масиві за оптимальний час (O(n)) не змінюючи вихідний масив і не використовуючи додаткову пам'ять.
                </p>
            </div>
            <div className={style.task2container}>
                <form className={style.queryContainer} onSubmit={handleSubmit(onSubmit)}>
                    <input className={style.input} type="text" placeholder="Add Array Item" {...register("arrayValue", {})} />
                    <div className="submit">
                        <input type="submit"  value="Add Item"/>
                    </div>
                </form>
                <div className={style.arrayContainer}>
                    <div className={style.arrayDisplayer}>
                        {mappingArray}
                    </div>
                    <div className='arrayInfo'>Array length : {arrayObj.items.length}</div>
                </div>
                <div className='output'>
                </div>

            </div>


        </div>

    );
}

export default SecondTask;


