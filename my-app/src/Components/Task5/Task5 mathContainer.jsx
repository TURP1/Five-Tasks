import React, { useEffect, useState } from 'react';
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
    const [actors, setActors] = useState(0);
    const [performance, setPerformance] = useState(true);
    const [actorsList, setActorsList] = useState(
        [firstActor, secondActor, thirdActor, fourthActor, fifthActor, sixthActor, seventhActor, eighthActor]
    )

    function startPerformance(data) {
        setStage({ width: +data.width, height: +data.height });
        setActors(+data.actors);
        let newActorsArray = actorsList.slice(0, 8) //actorsCount
        setActors(newActorsArray)
        setPerformance(true)
    }

    return <FifthTask
        startPerformance={startPerformance} performance={performance}
        stage={stage} actorsList={actorsList}>
    </FifthTask>

}

export default FifthTaskMath;


