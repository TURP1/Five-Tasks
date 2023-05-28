import React from "react";
import s from './Registration.module.css';


function Competitors({ registerList }) {
  
    let mapRegisteredUser = registerList.map((u, index) => {
        return (
            <div key={index} className={s.competitorsListItems}>
                <div>{u.name}</div>
                <div>
                    {u.size.map((t, i) => <span key={i}>{t.size + " "}</span>)}
                </div>
            </div>
        )
    })
    return (
        <div className={s.registerContainer}>
            <div className={s.namingOfTheCompetitorsList}>Competitors list</div>
            <div className={s.competitorsListContainer}>
                <div className={s.competitorsListItems}>
                    <div>Name</div>
                    <div>Size</div>
                </div>
                {mapRegisteredUser}
            </div>
        </div>
    )
}

export default Competitors;