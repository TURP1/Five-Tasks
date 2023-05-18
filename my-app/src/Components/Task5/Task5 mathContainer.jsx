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


function FifthTaskMath() {
    const [stage, setStage] = useState({ width: 4, height: 3 });
    const [performance, setPerformance] = useState(true);
    const [actorsList, setActorsList] = useState(
        [
            { positionIndex: 1, img: firstActor },
            { positionIndex: 2, img: secondActor },
            { positionIndex: 3, img: thirdActor },
            { positionIndex: 4, img: fourthActor },
            { positionIndex: 5, img: fifthActor },
            { positionIndex: 6, img: sixthActor },
            { positionIndex: 7, img: seventhActor },
            { positionIndex: 8, img: eighthActor }
        ]
    )


    function chooseActor(key, target) {
        let newActor = actorsList.filter(actor => {
            return actor.positionIndex === key
        })

        target.target.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; height: 200px">
        <img style="width: 150px; height: 150px; z-index:-1;"  src=${newActor[0].img}></img>
        </div>`
       
        console.log(target);
        let newActorList = actorsList.filter(actor => {
            return actor.positionIndex !== key
        })
        setActorsList(newActorList)
    }



    function startPerformance(data) {
        setStage({ width: +data.width, height: +data.height });
        let newActorsArray = actorsList.slice(0, Number(data.actors)) //actorsCount
        setActorsList(newActorsArray)
        setPerformance(true)
    }

    return <FifthTask
        startPerformance={startPerformance} performance={performance}
        stage={stage} actorsList={actorsList} chooseActor={chooseActor}>
    </FifthTask>

}

export default FifthTaskMath;


