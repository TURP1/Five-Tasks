import React, { useState } from 'react';
import FifthTask from './Task5';


function FifthTaskMath() {

    const [stage, setStage] = useState({ width: 4, height: 3 });
    const [actors, setActors] = useState(0);
    const [performance, setPerformance] = useState(true);

    function startPerformance(data) {
        setStage({ width: +data.width, height: +data.height });
        setActors(+data.actors);
        setPerformance(true)
    }

    return <FifthTask
        startPerformance={startPerformance} performance={performance}
        stage={stage} actorsCount={actors}>
    </FifthTask>

}

export default FifthTaskMath;


