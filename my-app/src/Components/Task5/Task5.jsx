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
          На сцені встановлений прожектор, який може освітлювати в одному з чотирьох напрямків: ліворуч, вгору, вправо або донизу, якщо дивитися на сцену зверху. Таким чином, позиція прожектора визначається клітиною, в якій він встановлений, та напрямком, в якому він світить.


          Вам необхідно обрати “хорошу позицію” для встановлення прожектора на сцені, за якої будуть виконуватися дві умови: у вибраній клітці не повинно бути актора, а в напрямку, куди світитиме прожектор, повинен бути хоча б один актор.
          Вам потрібно визначити кількість можливих “хороших позицій”, де можна встановити прожектор на сцені. Дві позиції вважаються різними, якщо вони відрізняються клітиною, де встановлений прожектор, або напрямком, в якому він світить.



          Реалізація завдань 1-4: всі вхідні дані повинні передаватсь через один json файл. А відповідь має записуватися в інший json файл.

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


