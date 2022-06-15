import logo from './Assets/arcane-alchemist-logo.png';
import './App.css';
import Tilt from 'react-vanilla-tilt';

function App() {
  return (
    <div className="App">
        <Tilt options={{ scale: 2, max: 25, glare: true, perspective: 1}}>
         <img src={logo} className="App-logo" alt="logo" />
        </Tilt>
    </div>
  );
}

export default App;