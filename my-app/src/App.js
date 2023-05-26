import './App.css';
import HorizontalLine from './Components/General/HorizontalLine';
import FirstTaskMath from './Components/Task1/Task1 mathContainer';
import SecondTaskMath from './Components/Task2/Task2 mathContainer';
import ThirdTaskMath from './Components/Task3/Task3 mathContainer';
import FourthTaskMath from './Components/Task4 /Task4 mathContainer';
import FifthTaskMath from './Components/Task5/Task5 mathContainer';
import logo from './assets/logo.jpeg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='App-logo' src={logo} alt='logoTest'></img>
        <p>Five Interesting Tasks</p>
      </header>
      <div>
      <FirstTaskMath></FirstTaskMath>
      <HorizontalLine></HorizontalLine>
      <SecondTaskMath></SecondTaskMath>
      <HorizontalLine></HorizontalLine>
      <ThirdTaskMath></ThirdTaskMath>
      <HorizontalLine></HorizontalLine>
      <FourthTaskMath></FourthTaskMath>
      <HorizontalLine></HorizontalLine>
      <FifthTaskMath></FifthTaskMath>
      <HorizontalLine></HorizontalLine>
      

      </div>
    </div>
  );
}

export default App;
