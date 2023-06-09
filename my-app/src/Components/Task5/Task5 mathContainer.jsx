import React, { useState } from 'react';
import FifthTask from './Task5';

import firstActor from "../../assets/task5/1.png"
import secondActor from "../../assets/task5/2.png"
import thirdActor from "../../assets/task5/3.png"
import fourthActor from "../../assets/task5/4.png"
import fifthActor from "../../assets/task5/5.png"
import sixthActor from "../../assets/task5/6.png"
import seventhActor from "../../assets/task5/7.png"
import eighthActor from "../../assets/task5/8.png"

const actorsListDefault = [
    { positionIndex: 1, img: firstActor },
    { positionIndex: 2, img: secondActor },
    { positionIndex: 3, img: thirdActor },
    { positionIndex: 4, img: fourthActor },
    { positionIndex: 5, img: fifthActor },
    { positionIndex: 6, img: sixthActor },
    { positionIndex: 7, img: seventhActor },
    { positionIndex: 8, img: eighthActor }
]

function FifthTaskMath() {
    const [stage, setStage] = useState({ width: 4, height: 3 });
    const [indexes, setIndexes] = useState({});
    const [performance, setPerformance] = useState(false);
    const [actorsList, setActorsList] = useState(actorsListDefault)

    function handleRefresh() {
        setPerformance(false);
        setActorsList(actorsListDefault)
    }

    function chooseActor(key, target, setModal, changeStageSituation) {
        let newActor = actorsList.filter(actor => {
            return actor.positionIndex === key
        })

        target.target.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; height: 200px">
        <img style="width: 150px; height: 150px; z-index:-1;"  src=${newActor[0].img}></img>
        </div>`

        let newActorList = actorsList.filter(actor => {
            return actor.positionIndex !== key
        })
        setActorsList(newActorList)
        setModal(false)
        changeStageSituation({ line: indexes.heightIndex, column: indexes.widthIndex, checked: true })
    }



    function startPerformance(data) {
        setStage({ width: +data.width, height: +data.height });
        let newActorsArray = actorsList.slice(0, Number(data.actors)) 
        setActorsList(newActorsArray)
        setPerformance(true)
    }

    return <FifthTask
        startPerformance={startPerformance}
        performance={performance}
        stage={stage}
        actorsList={actorsList}
        chooseActor={chooseActor}
        setIndexes={setIndexes}
        handleRefresh={handleRefresh}
    >
    </FifthTask>

}

export default FifthTaskMath;


