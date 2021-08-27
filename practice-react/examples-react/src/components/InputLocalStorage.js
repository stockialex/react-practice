// import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReusableHook from "./ReusableHook";

const InputLocalStorage = () => {
    // passing an arrow function to localStorage makes that the function is only
    // called at the first render
    // ---------- start of code reused in ReusableHook.js ----------
    // // const [name, setName] = useState(() => window.localStorage.getItem('name') || '')

    // the second parameter makes the sync of the element
    // without the 'name' on the array the changes would be lost
    // // useEffect(() => {
    // //     console.log('Entrando en el useEffect')
    // //     window.localStorage.setItem('name', name)
    // // }, [name])
    // ---------- end of code reused in ReusableHook.js ----------

    const [name, setName] = ReusableHook('name', '')

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