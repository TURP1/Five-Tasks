import React from 'react';



function WeightImage({ id, src, alt, className, commonClassName, addToWeightArray }) {

    return (
        <div className={commonClassName}>
            <img id={id} className={className} src={src} alt={alt} onClick={addToWeightArray} />
        </div>
    );
}

export default WeightImage;