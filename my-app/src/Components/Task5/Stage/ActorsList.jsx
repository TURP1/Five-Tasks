import React from 'react';
import style from './Stage.module.css'






function ActorsList({ actorsList }) {


  let mapActors = actorsList.map((actor) => {
      return (<img className={style.actorsImage} src={actor.img} key={actor.positionIndex} alt={String(actor.positionIndex)} />)
    })

  return (
    <div className={style.margin_10px}>
      <div className={style.actorsListContainer}>
        {actorsList.length > 0 && mapActors}
      </div>
    </div>

  )
}


export default ActorsList;
