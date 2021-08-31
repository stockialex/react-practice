
const BasicForm = () => {
    const handleSubmit = (event) => {
        const userName = event.target.elements.inputForm.value
        alert(`Hola ${userName}`)
        console.dir(event.target)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="inputForm">Name:</label>
            <input id="inputForm" type="text" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default BasicForm;