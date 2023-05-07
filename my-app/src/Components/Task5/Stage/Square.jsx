import React from 'react';
import style from './Stage.module.css'



function Square({heightIndex, widthIndex }) {



  return (
    <div className={style.square}>
        {`heightIndex - ${heightIndex} , widthIndex - ${widthIndex}`}
    </div>
  )
}


export default Square;
