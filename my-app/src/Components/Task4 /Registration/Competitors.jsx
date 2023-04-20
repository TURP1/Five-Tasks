import React, { useState } from "react";
import s from './Registration.module.css';





function Competitors({ }) {


    return (
        <div className={s.registerContainer}>
            <div className={s.namingOfTheCompetitorsList}>Competitors list</div>
            <div className={s.competitorsListContainer}>
                <div className={s.competitorsListItems}>
                    <div>Name</div>
                    <div>Size</div>
                </div>
                <div className={s.competitorsListItems}>
                    <div>Joui</div>
                    <div>M</div>
                </div>
            </div>
        </div>
    )
}

export default Competitors;