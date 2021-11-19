import React from "react";
import "./Task.css"

const Task = ({taskdoApp, handleTaksClick, handleRemoveTask}) => {
    return (
        <>
            <div className="task-container" style={taskdoApp.completed ? {borderLeft:'6px solid chartreuse'} : {}}>
                <div 
                onClick={() => handleTaksClick(taskdoApp.id)}
                className="task-title">
                    {taskdoApp.title}
                </div>
                <div className="buttons-container"><button onClick={() => handleRemoveTask(taskdoApp.id)} className="remove">X</button></div>
            </div>
        </>
    )
}

export default Task