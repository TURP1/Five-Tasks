import React from 'react';



function WeightImage({ id, src, alt, className, commonClassName, chooseWeightArray }) {

   let handleOnClick = (e) => {
        chooseWeightArray(e.target.alt)
        e.target.classList.add("hide")
    }
    return (
        <div className={commonClassName}>
            <img id={id} className={className} src={src} alt={alt} onClick={handleOnClick} />
        </div>
    );
}

export default WeightImage;