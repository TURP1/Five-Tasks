import React from 'react';
import style from './Task3.module.css';

import mainImg from '../../assets/task3/main.png'
import halfKilo from '../../assets/task3/0.5.png'
import kilo from '../../assets/task3/1.png'
import twoAndHalfKilo from '../../assets/task3/2.5.png'
import fiveKilo from '../../assets/task3/5.png'
import tenLb from '../../assets/task3/10lb.png'
import tenKilo from '../../assets/task3/10.png'
import fifteenKilo from '../../assets/task3/15.png'
import twentyKilo from '../../assets/task3/20.png'
import twentyFiveKilo from '../../assets/task3/25.png'
import twentyFiveLb from '../../assets/task3/25lb.png'
import thirtyFiveLb from '../../assets/task3/35lb.png'
import fortyFiveFiveLb from '../../assets/task3/45lb.png'
import WeightImage from './WeightImage'

import WeightImageSideView from './WeightImageSideView';




function ThirdTask({ addToWeightArray, answer, weightArray, deleteFromWeightArray, answerHandler, programAnswer }) {

  let mapWeightImage = ""
  if (weightArray.length) {
    mapWeightImage = weightArray.sort((a, b) => b.kilogram - a.kilogram).map(item => {
      return (
        <WeightImageSideView key={item.kilogram} src={item.src}
          kilogram={item.kilogram} deleteFromWeightArray={deleteFromWeightArray} />
      )
    })
  }


  return (
    <div>
      <div className="task">
        <p>
          Завдання 3.

          На змаганнях з паверліфтингу використовуються дискові навантажувачі вагою 0.5, 1, 2.5, 5, 10, 15, 20 та 25 кг.
          Також ми маємо американські дискові навантажувачі вагу яких визначено у lbs. Такі  дискові навантажувачі є тільки в 10, 25, 35, 45 фунтів.
          Гриф на штанзі завжди один і дорівнює 20кг.

          Потрібно знайти таку комбінацію дисковихі навантажувачів, щоб вага на штанзі була мінімальною, але перевищувала максимальний рекорд. Наприклад, Спортсмен номер 1 підняв 23 кг використовуючи гриф 20кг, 2 дискових навантажувачі по 0.5 кг та два по 1.кг
          Для того щоб перевершити вагу попереднього спортсмена, Спортсмену номер 2 буде оптимально підняти 25кг які можна отримати з грифу 20 кг і двох дискових навантажувачів по 2.5 кг. Дискові навантажувачі кожної ваги використовуються попарно лише раз

          Треба написати програму, яка за заданою вагою буде знаходити мінімальний наступний.

          На штанзі може бути не більше 24 дискових  навантажувачі, тобто максимум 12 з кожного боку.
        </p>
      </div>
      <div className={style.task3container}>
        <div className={style.leftSide}>
          <div>
            {programAnswer}
          </div>
          <div className={style.userWeight}>
            {"Your bar weight - " + answer + " kg"}
            <p>CLUE: If you want to remove some weight`s from barbell , click on it</p>
          </div>
          <div>
            <div className={style.positionContainer}>
              <img className={style.mainImg} src={mainImg} alt="mainTest" />

              <div className={style.leftPositioning}>
                <div className={style.barbelLeft}>
                  {mapWeightImage}
                </div>
              </div>

              <div className={style.rightPositioning}>
                <div className={style.barbelRight}>
                  {mapWeightImage}
                </div>
              </div>
              <div className="submitBtn" onClick={answerHandler}>
                Confirm Answer
              </div>
            </div>
          </div>

        </div>
        <div className={style.weightShelfContainer}>
          <div className={style.weightContainer}>
            <WeightImage addToWeightArray={addToWeightArray}
              id='halfKilo' src={halfKilo} alt="0.5"
              className={style.easyWeightImg} >
            </WeightImage>
            <WeightImage addToWeightArray={addToWeightArray}
              id='kilo' src={kilo} alt="1"
              className={style.easyWeightImg} >
            </WeightImage>
            <WeightImage addToWeightArray={addToWeightArray}
              id='twoAndHalfKilo' src={twoAndHalfKilo} alt="2.5"
              className={style.easyWeightImg} >
            </WeightImage>
            <WeightImage addToWeightArray={addToWeightArray}
              id='tenLb' src={tenLb} alt="4.5"
              className={style.easyWeightImg} >
            </WeightImage>
            <WeightImage addToWeightArray={addToWeightArray}
              id='fiveKilo' src={fiveKilo} alt="5"
              className={style.easyWeightImg} >
            </WeightImage>
          </div>
          <div className={style.weightContainer}>
            <WeightImage addToWeightArray={addToWeightArray}
              id='tenKilo' src={tenKilo} alt="10"
              className={style.middleWeightImg} >
            </WeightImage>
            <WeightImage addToWeightArray={addToWeightArray}
              id='twentyFiveLb' src={twentyFiveLb} alt="11.3"
              className={style.middleWeightImg} >
            </WeightImage>
            <WeightImage addToWeightArray={addToWeightArray}
              id='fifteenKilo' src={fifteenKilo} alt="15"
              className={style.middleWeightImg} >
            </WeightImage>
            <WeightImage addToWeightArray={addToWeightArray}
              id='thirtyFiveLb' src={thirtyFiveLb} alt="15.9"
              className={style.middleWeightImg} >
            </WeightImage>
          </div>
          <div className={style.weightContainer}>
            <WeightImage addToWeightArray={addToWeightArray}
              id='twentyKilo' src={twentyKilo} alt="20"
              className={style.topWeightImg} >
            </WeightImage>
            <WeightImage addToWeightArray={addToWeightArray}
              id='fortyFiveFiveLb' src={fortyFiveFiveLb} alt="20.4"
              className={style.topWeightImg} >
            </WeightImage>
            <WeightImage addToWeightArray={addToWeightArray}
              id='twentyFiveKilo' src={twentyFiveKilo} alt="25"
              className={style.topWeightImg} >
            </WeightImage>
          </div>


        </div>
      </div>


    </div>

  );
}


export default ThirdTask;


