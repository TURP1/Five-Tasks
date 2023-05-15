import React from 'react';
import style from './Stage.module.css'
import { useState } from 'react';




function Square({ heightIndex, widthIndex, changeStageSituation, setModal, setModalPosition }) {
  const [choose, setChoose] = useState(false)
  // const [actor, setActor] = useState(actor)


  let chooseHandler = (e) => {
    console.log(e);
    
    setModalPosition(
      { left: e.pageX,
         top: e.pageY,
         clientTop: e.clientY,
         containerWidth: e.target.parentElement.parentElement.clientWidth,
         containerHeight: e.target.parentElement.parentElement.clientHeight
         }
      )

    setModal(true)
    setChoose(!choose)
    changeStageSituation({ line: heightIndex, column: widthIndex, checked: !choose })
  }

  return (
    <div className={style.square} onClick={chooseHandler}>
      {/* {actor && <img src={actor.image}></img>} */}
      {`row - ${heightIndex} , column - ${widthIndex}, choose - ${choose}`}
    </div>
  )
}


export default Square;
