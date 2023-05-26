import React from 'react';
import Register from './Register/Register';
import Stage from './Stage/Stage';



function FifthTask({ startPerformance, performance, stage, actorsList, chooseActor, setIndexes, handleRefresh }) {


  return (
    <div>
      <div className="task">
        <p>
          Завдання 5.
          У театрі є прямокутна сцена розміром n* m.
          Для розміщення акторів на сцені директор театру надав вам план, де вказано, де мають стояти актори, а де ні.
          На сцені встановлені 2 прожектори. Позиція прожектора визначається клітиною, в якій він встановлений, та напрямком, в якому він світить.


          Вам необхідно обрати “хорошу позицію” для встановлення прожекторів на сцені, в напрямку, куди світитиме прожектор, повинен бути хоча б один актор.
          
        </p>
      </div>
      <div>
        {!performance && <Register startPerformance={startPerformance}></Register>}
        {performance &&
          <>
            <Stage
              stage={stage}
              actorsList={actorsList}
              chooseActor={chooseActor}
              setIndexes={setIndexes}
            ></Stage>
            <div className="submitBtn" onClick={handleRefresh}>
              New Stage
            </div>
          </>
        }

      </div>

    </div>
  );
}


export default FifthTask;


