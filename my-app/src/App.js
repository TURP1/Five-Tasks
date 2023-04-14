import './App.css';
import HorizontalLine from './Components/General/HorizontalLine';
import FirstTaskMath from './Components/Task1/Task1 mathContainer';
import SecondTaskMath from './Components/Task2/Task2 mathContainer';
import logo from './assets/logo.jpeg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='App-logo' src={logo} alt='logoTest'></img>
        <p>Agile test task</p>
      </header>
      <div>
      <FirstTaskMath></FirstTaskMath>
      <HorizontalLine></HorizontalLine>
      <SecondTaskMath></SecondTaskMath>
      </div>
    </div>
  );
}

export default App;
