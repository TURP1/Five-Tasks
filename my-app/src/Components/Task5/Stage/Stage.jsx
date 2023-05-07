import React, { useEffect, useState } from 'react';
import style from './Stage.module.css'
import Flex from '../additional/Flex';
import Square from './Square';


function Stage({ stage }) {

  const [stageObj, setStageObj] = useState([])

  useEffect(() => {
    const newStageObj = [];
    for (let i = 0; i < stage.height; i++) {
      for (let j = 0; j < stage.width; j++) {
        newStageObj.push({ column: i, line: j, checked: false });
      }
    }
    console.log(newStageObj);
    setStageObj(newStageObj);
  }, [stage]);

  useEffect(() => {
    console.log(stageObj);
  }, [stageObj]);



  function createArray(length) {
    return Array.from({ length }, (_, index) => index + 1);
  }
  const widthArr = createArray(stage.width);
  const heightArr = createArray(stage.height);

  const mapWidth = (heightIndex) => {
    return widthArr.map((_, index) => {
      return <Square key={index} changeStageSituation={changeStageSituation} heightIndex={heightIndex} widthIndex={index} />;
    });
  };

  const mapStage = heightArr.map((_, index) => {
    return <Flex gap='0' wrap="nowrap" key={index}>{mapWidth(index)}</Flex>;
  });



  function changeStageSituation(obj) {
    const updatedArray = stageObj.map((item) => {
      if (item.column === obj.column && item.line === obj.line) {
        return { ...item, checked: obj.checked }
      }
      return item
    })

    setStageObj(updatedArray);
  }

  return (
    <div className={style.stageContainer}>
      <Flex gap="20px">
        <VerticalLine></VerticalLine>
        <Flex direction="column" gap="0px">
          {mapStage}
          <HorizontalLine></HorizontalLine>
        </Flex>
      </Flex>

    </div>
  )
}

export default Stage;

function VerticalLine() {
  return (<div className={style.vertical}></div>);
}

function HorizontalLine() {
  return (<div className={style.horizontal}></div>);
}
