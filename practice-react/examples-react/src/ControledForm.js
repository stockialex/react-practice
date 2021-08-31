import { useState } from "react";

function ControledForm(){
    const [userName, setUserName] = useState('')
    
    const handleChange = (event) => {
        // The input will be saved as lower case
        setUserName(event.target.value.toLowerCase())
    }

    const handleSubmit = () => {
        alert(`Your input: ${userName}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='inputUserName'>
                Name:
            </label>
            <input 
                type="text" 
                id="inputUserName"
                onChange={handleChange}
                // This will show the user that upper case it's not allowed
                value={userName} 
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default ControledForm;