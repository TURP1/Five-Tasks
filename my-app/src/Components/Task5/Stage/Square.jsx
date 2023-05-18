import React from 'react';
import style from './Stage.module.css'
import { useState } from 'react';




function Square({ heightIndex, widthIndex, changeStageSituation, setModal, setModalPosition, setChooseSquare, chooseSquare }) {
  const [choose, setChoose] = useState(false)
  // const [actor, setActor] = useState(actor)


  let chooseHandler = (e) => {

    
    setModalPosition(
      { left: e.pageX,
         top: e.pageY,
         clientTop: e.clientY,
         containerWidth: e.target.parentElement.parentElement.clientWidth,
         containerHeight: e.target.parentElement.parentElement.clientHeight
         }
      )
    setChooseSquare({target: e.target})
    setModal(true)
    // setChoose(!choose)
    // changeStageSituation({ line: heightIndex, column: widthIndex, checked: !choose })
  }

  return (
    <div className={style.square} onClick={chooseHandler}>
      {chooseSquare.img && <img src={chooseSquare.img}></img> }
      {/* {actor && <img src={actor.image}></img>} */}
      {`row - ${heightIndex} , column - ${widthIndex}, choose - ${choose}`}
    </div>
  )
}


export default Square;
