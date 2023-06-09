import React from 'react';
import style from './Task3.module.css';


function WeightImageSideView({ src, kilogram, deleteFromWeightArray }) {
    let weightHeight;

    if (kilogram < 2) {
        weightHeight = kilogram * 30;
    }
    else if (kilogram < 10) {
        weightHeight = kilogram * 15;
    }
    else weightHeight = kilogram * 8;


   
    return (
        <img className={style.weight} src={src}
        onClick={deleteFromWeightArray}
        title={`${kilogram} kg`}
            alt={kilogram}
            style={{
                height: `${weightHeight}px`,
                width: '15px'
            }}
        />
    );
}

export default WeightImageSideView;