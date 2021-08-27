import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const InputLocalStorage = () => {
    // passing an arrow function to localStorage makes that the function is only
    // called at the first render
    const [name, setName] = useState(() => window.localStorage.getItem('name') || '')

    useEffect(() => window.localStorage.setItem('name', name))

    const handleChange = (event) => setName(event.target.value)

    return(
        <div>
            <form action="">
                <label htmlFor="inputName">Name:</label>
                <input value={name} id='inputName' type="text"
                    onChange={handleChange} />
            </form>
            <p>
                {name ? <strong>Hello {name}</strong> : 'Still waiting for your name'}
            </p>
        </div>
    )
}

export default InputLocalStorage;