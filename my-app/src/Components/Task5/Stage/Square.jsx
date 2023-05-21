import React from 'react';
import style from './Stage.module.css'
import { useState } from 'react';




function Square({ heightIndex, widthIndex, setModal, setModalPosition, setChooseSquare, chooseSquare, setIndexes }) {

  let chooseHandler = (e) => {


    setModalPosition(
      {
        left: e.pageX,
        top: e.pageY,
        clientTop: e.clientY,
        containerWidth: e.target.parentElement.parentElement.clientWidth,
        containerHeight: e.target.parentElement.parentElement.clientHeight
      }
    )
    setChooseSquare({ target: e.target })
    setModal(true)
    setIndexes({ heightIndex: heightIndex, widthIndex: widthIndex })

  }

  return (
    <div className={style.square} onClick={chooseHandler}>
      {chooseSquare.img && <img src={chooseSquare.img}></img>}

    </div>
  )
}


export default Square;
