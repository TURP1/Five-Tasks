import React from 'react';



function WeightImageSideView({ src, kilogram }) {

    let weightHeight = kilogram * 5
    let handleOnClick = (e) => {
        // chooseWeightArray(e.target.alt)
        // e.target.classList.add("hide")
    }
    return (
        <img src={src} style={{ height: { weightHeight }, width: '15px' }} alt={`${kilogram} kg`} />
    );
}

export default WeightImageSideView;