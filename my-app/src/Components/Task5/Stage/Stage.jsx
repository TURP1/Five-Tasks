import React, { useEffect, useState } from 'react';
import style from './Stage.module.css'
import Flex from '../additional/Flex';
import Square from './Square';
import VerticalLamp from '../additional/VerticalLamp';
import HorizontalLamp from '../additional/HorizontalLamp';
import ActorsList from './ActorsList';
import ModalActors from './ModalActors';





function Stage({ stage, actorsList, chooseActor, setIndexes }) {

  const [newActor, setNewActor] = useState([])
  const [checkedActor, setCheckedActor] = useState({})
  const [stageObj, setStageObj] = useState([])
  const [verticalLamp, setVerticalLamp] = useState({
    top: "0px",
    display: "block",
    stageWidth: "0px"
  })
  const [horizontalLamp, setHorizontalLamp] = useState({
    left: "0px",
    display: "block",
    stageHeight: "0px"
  })
  const [columns, setColumns] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 })
  const [rows, setRows] = useState({ 0: 0, 1: 0, 2: 0 })
  const [modal, setModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({});
  const [chooseSquare, setChooseSquare] = useState({})

  function hideModalWindow(e) {
    if (e.target.id === "hide") {
      setModal(false)
      setChooseSquare({})
    }
  }


  useEffect(() => {
    const newStageObj = [];
    for (let i = 0; i < stage.height; i++) {
      for (let j = 0; j < stage.width; j++) {
        newStageObj.push({ column: j, line: i, checked: false });
      }
    }
    setStageObj(newStageObj);
  }, [stage]);

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
    compareColumns(columns);
    compareRows(rows);
  }, [columns, rows]);




  useEffect(() => {
    setNewActor(checkedActor.column !== undefined ? [checkedActor] : []);
    compareColumns(columns);
    compareRows(rows)
  }, [checkedActor]);

  function compareRows(rows) {
    const biggest = Object.keys(rows).reduce((a, b) => rows[a] > rows[b] ? a : b);
    const topPositions = ["90px", "290px", "490px"];

    if (rows[biggest] === 0) {
      setVerticalLamp({ top: "0px", display: "none" });
    } else {
      let stageWidth;
      switch (stage.width) {
        case 1:
          stageWidth = "250px";
          break;
        case 2:
          stageWidth = "450px";
          break;
        case 3:
          stageWidth = "650px";
          break;
        case 4:
          stageWidth = "855px";
          break;
        default:
          break;
      }
      setVerticalLamp({ top: topPositions[biggest], display: "block", stageWidth });
    }
  }

  function compareColumns(columns) {
    const biggest = Object.keys(columns).reduce((a, b) => columns[a] > columns[b] ? a : b);
    const leftPositions = ["90px", "290px", "490px", "690px"];

    if (columns[biggest] === 0) {
      setHorizontalLamp({ left: "0px", display: "none" });
    } else {
      let stageHeight;
      switch (stage.height) {
        case 1:
          stageHeight = "250px";
          break;
        case 2:
          stageHeight = "450px";
          break;
        case 3:
          stageHeight = "650px";
          break;
        default:
          break;
      }
      setHorizontalLamp({ left: leftPositions[biggest], display: "block", stageHeight })
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
        setModal={setModal}
        key={index}
        heightIndex={heightIndex}
        widthIndex={index}
        setModalPosition={setModalPosition}
        setChooseSquare={setChooseSquare}
        chooseSquare={chooseSquare}
        setIndexes={setIndexes}
      />;
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
    <div className={style.stageContainer} >
      <Flex justify="center">
        <h2>Actors</h2>
      </Flex>
      {actorsList.length > 0 &&
        <ActorsList actorsList={actorsList} ></ActorsList>
      }

      <Flex gap="20px" justify="center" onClick={(e) => hideModalWindow(e)} id="hide">
        <VerticalLine top={verticalLamp.top} display={verticalLamp.display} stageWidth={verticalLamp.stageWidth} ></VerticalLine>
        <Flex direction="column" gap="0px" >
          {modal && actorsList.length > 0 &&
            <ModalActors
              top={modalPosition.top}
              left={modalPosition.left}
              clientTop={modalPosition.clientTop}
              containerWidth={modalPosition.containerWidth}
              containerHeight={modalPosition.containerHeight}
              actorsList={actorsList}
              chooseActor={chooseActor}
              target={chooseSquare}
              setModal={setModal}
              changeStageSituation={changeStageSituation}
            >
            </ModalActors>}
          {mapStage}
          <HorizontalLine
            left={horizontalLamp.left}
            display={horizontalLamp.display}
            stageHeight={horizontalLamp.stageHeight}
          ></HorizontalLine>
        </Flex>
      </Flex>


    </div>
  )
}

export default Stage;

function VerticalLine({ top, display, stageWidth }) {
  return (
    <div>
      <VerticalLamp
        top={top}
        display={display}
        stageWidth={stageWidth}
      ></VerticalLamp>
      <div className={style.vertical}></div>
    </div>

  );
}

function HorizontalLine({ left, display, stageHeight }) {
  return (
    <div>
      <HorizontalLamp
        left={left}
        display={display}
        stageHeight={stageHeight}
      ></HorizontalLamp>
      <div className={style.horizontal}></div>
    </div>
  );
}
