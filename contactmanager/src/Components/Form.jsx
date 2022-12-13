import React from 'react';

export const Form = ({ userInput, onFormChange, onFormSubmit }) => {

    const handleChange = (event) => {
        onFormChange(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit()
    }

    return(
        <div style={{marginLeft:"500px",display: "flex",justifyContent:"space-around",flexDirection:"column"}}>
        <h1>Add Contact</h1>
        <form onSubmit={handleSubmit} style={{display:"flex"}}>
            <input type="text" required value={userInput} onChange={handleChange}></input>
            <input type="submit" ></input>
        </form>
        </div>
    )
}