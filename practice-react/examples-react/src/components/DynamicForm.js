import { useState } from "react"

const DynamicForm = () => {
    const [userName, setUserName] = useState('')
    const isLowerCase = userName === userName.toLocaleLowerCase()
    const error = isLowerCase ? null : 'The input must be only on lower case'

    const handleSubmit = (event) => {
        const userName = event.target.elements.inputForm.value
        alert(`Your input: ${userName}`)
        console.dir(event.target)
    }

    function handleChange(event){
        setUserName(event.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="inputForm">Name:</label>
            <input id="inputForm" type="text" onChange={handleChange} />
            <div style={{color: 'red'}}>{error}</div>
            {/* The submit button will be disable if the error is true */}
            <button type="submit" disabled={Boolean(error)}>Submit</button>
        </form>
    )
}

export default DynamicForm;