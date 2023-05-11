import React, { useEffect } from 'react';
import style from './Stage.module.css'
import { useState } from 'react';

import firstActor from "../../../assets/task5/1.png"
import secondActor from "../../../assets/task5/2.png"
import thirdActor from "../../../assets/task5/3.png"
import fourthActor from "../../../assets/task5/4.png"
import fifthActor from "../../../assets/task5/5.png"
import sixthActor from "../../../assets/task5/6.png"
import seventhActor from "../../../assets/task5/7.png"
import eighthActor from "../../../assets/task5/8.png"



function ActorsList({ actorsCount }) {
  const [actors, setActors] = useState(
    [firstActor, secondActor, thirdActor, fourthActor, fifthActor, sixthActor, seventhActor, eighthActor]
  )

  useEffect(() => {
    let newActorsArray = actors.slice(0, 8) //actorsCount
    setActors(newActorsArray)
  }, [actorsCount]);


  let mapActors = actors.map((actor, index) => {
    return (<img className={style.actorsImage} src={actor} key={actor} alt={`Actor # ${index}`} />)
  })

  return (
    <div className={style.margin_10px}>
       <div className={style.actorsListContainer}>
      {mapActors}
    </div>
    </div>
   
  )
}


export default ActorsList;
