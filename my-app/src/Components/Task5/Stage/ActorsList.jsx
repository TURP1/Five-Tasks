import React, { useEffect } from 'react';
import style from './Stage.module.css'
import { useState } from 'react';





function ActorsList({ actorsList }) {




  let mapActors = actorsList.map((actor, index) => {
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
