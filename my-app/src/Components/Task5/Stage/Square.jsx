import React from 'react';
import style from './Stage.module.css'
import { useState } from 'react';



function Square({ heightIndex, widthIndex, changeStageSituation }) {
  const [choose, setChoose] = useState(false)

  let chooseHandler = () => {
    setChoose(!choose)
    changeStageSituation({ line: heightIndex, column: widthIndex, checked: !choose })
  }

  return (
    <div className={style.square} onClick={chooseHandler}>
      {`row - ${heightIndex} , column - ${widthIndex}, choose - ${choose}`}
    </div>
  )
}


export default Square;
