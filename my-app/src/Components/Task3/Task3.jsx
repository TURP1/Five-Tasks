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


import kilogram from '../../assets/task3/p20.png'
import lbs from '../../assets/task3/p45lb.png'

import WeightImageSideView from './WeightImageSideView';







function handleClick(event) {
  // Handle the click event here
  console.log("Image clicked:", event.target);
}

function ThirdTask({ chooseWeightArray, answer }) {

  const images = document.querySelectorAll("img");

  // Loop through the images and add the event listener
  images.forEach(image => {
    image.addEventListener("click", handleClick);
  });


  return (
    <div>
      <div className="task">
        <p>
          Важливо, що  дискові навантажувачі будь-якої ваги вішаються на штангу попарно. Так само на штанзі може бути не більше 24 дискових  навантажувачі, тобто максимум 12 з кожного боку.
        </p>
      </div>
      <div className={style.task3container}>
        <div className={style.leftSide}>
          <div>
            Try to play with programme, starting record - 21
          </div>
          <div>
            {answer + " kg"}
          </div>
          <div>
            <img className={style.mainImg} src={mainImg} alt="mainTest" />
            <div className={style.barbelLeft}>
              <WeightImageSideView src={lbs} kilogram={20.4} />
              <WeightImageSideView src={kilogram} kilogram={25} />
            </div>
            <div className={style.rightPositioning}>
              <div className={style.barbelRight}>
                <WeightImageSideView src={lbs} kilogram={20.4} />
                <WeightImageSideView src={kilogram} kilogram={25} />
              </div>
            </div>

          </div>
        </div>
        <div className={style.weightShelfContainer}>
          <div className={style.weightContainer}>
            <WeightImage chooseWeightArray={chooseWeightArray}
              id='halfKilo' src={halfKilo} alt="0.5"
              className={style.easyWeightImg} >
            </WeightImage>
            <WeightImage chooseWeightArray={chooseWeightArray}
              id='kilo' src={kilo} alt="1"
              className={style.easyWeightImg} >
            </WeightImage>
            <WeightImage chooseWeightArray={chooseWeightArray}
              id='twoAndHalfKilo' src={twoAndHalfKilo} alt="2.5"
              className={style.easyWeightImg} >
            </WeightImage>
            <WeightImage chooseWeightArray={chooseWeightArray}
              id='tenLb' src={tenLb} alt="4.5"
              className={style.easyWeightImg} >
            </WeightImage>
            <WeightImage chooseWeightArray={chooseWeightArray}
              id='fiveKilo' src={fiveKilo} alt="5"
              className={style.easyWeightImg} >
            </WeightImage>
          </div>
          <div className={style.weightContainer}>
            <WeightImage chooseWeightArray={chooseWeightArray}
              id='tenKilo' src={tenKilo} alt="10"
              className={style.middleWeightImg} >
            </WeightImage>
            <WeightImage chooseWeightArray={chooseWeightArray}
              id='twentyFiveLb' src={twentyFiveLb} alt="11.3"
              className={style.middleWeightImg} >
            </WeightImage>
            <WeightImage chooseWeightArray={chooseWeightArray}
              id='fifteenKilo' src={fifteenKilo} alt="15"
              className={style.middleWeightImg} >
            </WeightImage>
            <WeightImage chooseWeightArray={chooseWeightArray}
              id='thirtyFiveLb' src={thirtyFiveLb} alt="15.9"
              className={style.middleWeightImg} >
            </WeightImage>
          </div>
          <div className={style.weightContainer}>
            <WeightImage chooseWeightArray={chooseWeightArray}
              id='twentyKilo' src={twentyKilo} alt="20"
              className={style.topWeightImg} >
            </WeightImage>
            <WeightImage chooseWeightArray={chooseWeightArray}
              id='fortyFiveFiveLb' src={fortyFiveFiveLb} alt="20.4"
              className={style.topWeightImg} >
            </WeightImage>
            <WeightImage chooseWeightArray={chooseWeightArray}
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


