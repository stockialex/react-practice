import './App.css';
// import EventHandler from './components/EventHandler';
import InputLocalStorage from './components/InputLocalStorage';
import {useState} from 'react';
import BasicForm from './components/BasicForm';
import DynamicForm from './components/DynamicForm';
import ControledForm from './ControledForm';
import ErrorBoundaries from './components/ErrorBoundaries';
import RenderingList from './components/RenderingList';
import HttpRequest from './components/HttpRequest';

function App() {
  const [count, setCount] = useState(0)
  return (
      // <EventHandler />

    // <div id='container'>
    //   <button onClick={() => setCount(c => c + 1)}>{count}</button>
    //   <InputLocalStorage />
    // </div>

    // <BasicForm />
    // <DynamicForm />
    // <ControledForm />

    // <ErrorBoundaries />

    // <RenderingList />

    <HttpRequest />
    
  );
}

export default App;
