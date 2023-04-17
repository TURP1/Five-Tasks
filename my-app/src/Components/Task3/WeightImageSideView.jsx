import React from 'react';
import style from './Task3.module.css';


function WeightImageSideView({ src, kilogram }) {
    let weightHeight
    if (kilogram<2) {
        weightHeight = kilogram * 30;
    }
    else if (kilogram<10){
         weightHeight = kilogram * 15;
    }
    else  weightHeight = kilogram * 8;
  
    let positionAdder = weightHeight / 2; 
    let handleOnClick = (e) => {
        // chooseWeightArray(e.target.alt)
        // e.target.classList.add("hide")
    }
    return (
        <img className={style.weight} src={src} style={{
            height: `${ weightHeight }px`,
            width: '15px',
            position: 'relative',
            bottom: `${positionAdder}px`
        }
        }
            alt={`${kilogram} kg`} />
    );
}

export default WeightImageSideView;