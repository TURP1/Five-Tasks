import React, { useEffect, useState } from 'react';
import style from './Stage.module.css'
import Flex from '../additional/Flex';
import Square from './Square';
import VerticalLamp from '../additional/VerticalLamp';
import HorizontalLamp from '../additional/HorizontalLamp';



function Stage({ stage }) {

  const [stageObj, setStageObj] = useState([])
  const [verticalLamp, setVerticalLamp] = useState({ top: "90px", display: "block" })
  const [horizontalLamp, setHorizontalLamp] = useState({ left: "0px", display: "block" })
  const [columns, setColumns] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 })
  const [rows, setRows] = useState({ 0: 0, 1: 0, 2: 0 })



  useEffect(() => {
    const newStageObj = [];
    for (let i = 0; i < stage.height; i++) {
      for (let j = 0; j < stage.width; j++) {
        newStageObj.push({ column: i, line: j, checked: false });
      }
    }
    setStageObj(newStageObj);
  }, [stage]);


  // { column: 0, line: 2, checked: false }

  useEffect(() => {
    console.log(stageObj);
    let newActor = stageObj.filter(obj => obj.checked === true);

    // let newColumnArray = () => {
    //   const updatedArray = columns.map((item) => {
    //     if (item.column === obj.column) {
    //       return { ...item, checked: obj.checked }
    //     }
    //     return item
    //   })
  
    //   setStageObj(updatedArray);
    // }
   

    columns[newActor.column]++
    rows[newActor.line]++
    compareColumns(columns);
    compareRows(rows)
  }, [stageObj]);


  function compareColumns(columns) {

    const biggest = Object.keys(columns).reduce((a, b) => columns[a] > columns[b] ? a : b);
    console.log({ [biggest]: columns[biggest] }); // Output: {1: 3}

    switch (parseInt(biggest)) {
      case 0:
        setHorizontalLamp({ left: "90px", display: "block" })
        break;
      case 1:
        setHorizontalLamp({ left: "290px", display: "block" })
        break;
      case 2:
        setHorizontalLamp({ left: "490px", display: "block" })
        break;
      case 3:
        setHorizontalLamp({ left: "690px", display: "block" })
        break;

      default:
        break;
    }
  }

  function compareRows(rows) {

    const biggest = Object.keys(rows).reduce((a, b) => rows[a] > rows[b] ? a : b);

    switch (parseInt(biggest)) {
      case 0:
        setVerticalLamp({ top: "90px", display: "block" })
        break;
      case 1:
        setVerticalLamp({ top: "290px", display: "block" })
        break;
      case 2:
        setVerticalLamp({ top: "490px", display: "block" })
        break;

      default:
        break;
    }
  }


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
        <VerticalLine top={verticalLamp.top} display={verticalLamp.display}></VerticalLine>
        <Flex direction="column" gap="0px">
          {mapStage}
          <HorizontalLine left={horizontalLamp.left} display={horizontalLamp.display}></HorizontalLine>
        </Flex>
      </Flex>

    </div>
  )
}

export default Stage;

function VerticalLine({ top, display }) {
  return (
    <div>
      <VerticalLamp top={top} display={display}></VerticalLamp>
      <div className={style.vertical}></div>

    </div>

  );
}

function HorizontalLine({ left, display }) {
  return (
    <div>
      <HorizontalLamp left={left} display={display}></HorizontalLamp>
      <div className={style.horizontal}></div>
    </div>
  );
}
