import React from 'react';
import style from './Stage.module.css'
import { useState } from 'react';




function Square({ heightIndex, widthIndex, changeStageSituation, setModal, setModalPosition }) {
  const [choose, setChoose] = useState(false)


  let chooseHandler = (e) => {
    console.log(e);
    console.log(e.clientY);
    setModalPosition(
      { left: e.pageX,
         top: e.pageY,
         clientTop: e.clientY,
         }
      )

    setModal(true)
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
