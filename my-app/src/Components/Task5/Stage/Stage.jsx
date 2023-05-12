import React, { useEffect, useState } from 'react';
import style from './Stage.module.css'
import Flex from '../additional/Flex';
import Square from './Square';
import VerticalLamp from '../additional/VerticalLamp';
import HorizontalLamp from '../additional/HorizontalLamp';
import ActorsList from './ActorsList';
import ModalActors from './ModalActors';




function Stage({ stage, actorsCount }) {

  const [newActor, setNewActor] = useState([])
  const [checkedActor, setCheckedActor] = useState({})
  const [stageObj, setStageObj] = useState([])
  const [verticalLamp, setVerticalLamp] = useState({ top: "90px", display: "block" })
  const [horizontalLamp, setHorizontalLamp] = useState({ left: "0px", display: "block" })
  const [columns, setColumns] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 })
  const [rows, setRows] = useState({ 0: 0, 1: 0, 2: 0 })
  const [modal, setModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({});



  useEffect(() => {
    const newStageObj = [];
    for (let i = 0; i < stage.height; i++) {
      for (let j = 0; j < stage.width; j++) {
        newStageObj.push({ column: j, line: i, checked: false });
      }
    }
    setStageObj(newStageObj);
  }, [stage]);


  // { column: 0, line: 2, checked: false }



  useEffect(() => {
    if (newActor.length > 0) {
      const newColumns = { ...columns };
      const newRows = { ...rows };

      newActor.forEach((actor) => {
        newColumns[actor.column]++;
        newRows[actor.line]++;
      });

      setColumns(newColumns);
      setRows(newRows);
    }
  }, [newActor]);

  useEffect(() => {
    compareRows(rows);
  }, [rows]);

  useEffect(() => {
    compareColumns(columns);
  }, [columns]);



  useEffect(() => {
    setNewActor(checkedActor.column !== undefined ? [checkedActor] : []); // check if newClickedActor has a truthy value before setting newActor state variable
    compareColumns(columns);
    compareRows(rows)
  }, [checkedActor]);

  function compareRows(rows) {
    const biggest = Object.keys(rows).reduce((a, b) => rows[a] > rows[b] ? a : b);
    const topPositions = ["90px", "290px", "490px"];

    if (rows[biggest] === 0) {
      setVerticalLamp({ top: "90px", display: "none" });
    } else {
      setVerticalLamp({ top: topPositions[biggest], display: "block" });
    }
  }

  function compareColumns(columns) {
    const biggest = Object.keys(columns).reduce((a, b) => columns[a] > columns[b] ? a : b);
    const leftPositions = ["90px", "290px", "490px", "690px"];

    if (columns[biggest] === 0) {
      setHorizontalLamp({ left: "0px", display: "none" });
    } else {
      setHorizontalLamp({ left: leftPositions[biggest], display: "block" });
    }
  }


  function createArray(length) {
    return Array.from({ length }, (_, index) => index + 1);
  }
  const widthArr = createArray(stage.width);
  const heightArr = createArray(stage.height);

  const mapWidth = (heightIndex) => {
    return widthArr.map((_, index) => {
      return <Square
        setModal={setModal} key={index} changeStageSituation={changeStageSituation}
        heightIndex={heightIndex} widthIndex={index} setModalPosition={setModalPosition}/>;
    });
  };

  const mapStage = heightArr.map((_, index) => {
    return <Flex gap='0' wrap="nowrap" key={index}>{mapWidth(index)}</Flex>;
  });



  function changeStageSituation(obj) {
    setCheckedActor(obj);
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
      <Flex justify="center">
        <h2>Actors</h2>
      </Flex>

      <ActorsList actorsCount={actorsCount}></ActorsList>
      <Flex gap="20px" justify="center">
        <VerticalLine top={verticalLamp.top} display={verticalLamp.display}></VerticalLine>
        <Flex direction="column" gap="0px">
          {modal && 
          <ModalActors top={modalPosition.top} left={modalPosition.left} clientTop={modalPosition.clientTop}></ModalActors>}
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
