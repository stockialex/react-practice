import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const EventHandler = () =>{
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    const handleClick = () => setCount( count + 1 )
    const handleChange = (event) => setName( event.target.value)
  
  return (
    <div className="App">
        <div className='row'>
            <p className='mt-5'>
                Actualmente hay {count} eventos preparados
            </p>
            <button 
              className='mb-4'
              onClick={handleClick}>
              Agregar Evento
            </button>
        </div>
        <div className='row'>
            <label 
              htmlFor='inputName'
              className='mt-4'>
              {name ? <strong>Hola {name}</strong> : 'Ingresa un nombre'}
            </label>
            <input
              className='mt-3'
              id='inputName' 
              onChange={handleChange} />
        </div>
    </div>
  );
  
  

}  
export default EventHandler;