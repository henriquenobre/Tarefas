import React, { useState } from 'react';
import Button from '../Button/Button';
import "./AddTask.css"

const AddTask = ({handleTaskAdd}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAdd(inputData)
        setInputData('')
    }

    return(
        <div className="add-task-container">
            <input 
            onChange={handleInputChange}
            value={inputData}
            className="add-task-input" type="text" />
            <div className="button-container">
            <Button onClick={handleAddTaskClick}>Adcionar</Button>
            </div>
        </div>
        
    )
}

export default AddTask