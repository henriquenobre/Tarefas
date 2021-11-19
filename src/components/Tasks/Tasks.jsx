import React from "react";
import Task from "../Task/Task";

const Tasks = ({ taskdoApp, handleTaksClick, handleRemoveTask }) => {
  return (
    <>
      {taskdoApp.map((taskdoApp) => (
        <Task handleRemoveTask={handleRemoveTask} handleTaksClick={handleTaksClick} taskdoApp={taskdoApp}/>
      ))}
    </>
  );
};

export default Tasks;
