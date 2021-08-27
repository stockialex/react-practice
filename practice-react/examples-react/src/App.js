import './App.css';
// import EventHandler from './components/EventHandler';
import InputLocalStorage from './components/InputLocalStorage';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
      // <EventHandler />
    <div id='container'>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <InputLocalStorage />
    </div>
  );
}

export default App;
