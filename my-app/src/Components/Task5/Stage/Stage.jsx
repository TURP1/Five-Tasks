import React from 'react';
import style from './Stage.module.css'
import Flex from '../additional/Flex';
import Square from './Square';


function Stage({ stage }) {

  function createArray(length) {
    return Array.from({ length }, (_, index) => index + 1);
  }

  const widthArr = createArray(stage.width);
  const heightArr = createArray(stage.height);


  const mapWidth = (heightIndex) => {
    return widthArr.map((_, index) => {
      return <Square key={index} heightIndex={heightIndex} widthIndex={index} />;
    });
  };

  const mapStage = heightArr.map((_, index) => {
    return <Flex gap='0' wrap="nowrap" key={index}>{mapWidth(index)}</Flex>;
  });

  return (
    <div className={style.stageContainer}>
      {mapStage}
    </div>
  )
}


export default Stage;
