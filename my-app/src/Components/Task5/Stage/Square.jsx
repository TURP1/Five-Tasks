import React, { useState } from 'react';
import style from './Stage.module.css'

function Square({ heightIndex, widthIndex, setModal, setModalPosition, setChooseSquare, chooseSquare, setIndexes }) {

  const [hover, setHover] = useState(true);


  let chooseHandler = (e) => {
    console.log(e.target);
    if (e.target.children.length) {
      return
    }

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
    setHover(false)
    setModal(true)
    setIndexes({ heightIndex: heightIndex, widthIndex: widthIndex })
  }

  let squareClass = hover ? style.squareWithHover : style.squareWithoutHover;

  return (
    <div className={squareClass} onClick={chooseHandler}>
      {chooseSquare.img && <img src={chooseSquare.img} alt="Square Image" />}
    </div>
  );

}


export default Square;
