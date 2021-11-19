import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";
import {v4 as uuidv4} from 'uuid'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar React",
      completed: true,
    },
    {
      id: "2",
      title: "Estudar React-Native",
      completed: false,
    },
  ]);

  const handleTaskAdd = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id:uuidv4(), 
        //Math.random(10),
        completed: false,
      },
    ];
    setTasks(newTask)
  };

  const handleTaksClick = (taskId) => {
    const newTask = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task; 
    });
    setTasks(newTask)
  }

  const handleRemoveTask = (taskId) => {
    const newTask = tasks.filter(task => task.id !== taskId)
    setTasks(newTask)
  }

  return (
    <>
      <div className="container">
        <h1 style={{color:'white'}}>Tarefas</h1>
        <AddTask handleTaskAdd={handleTaskAdd}/>
        <Tasks handleRemoveTask={handleRemoveTask} handleTaksClick={handleTaksClick} taskdoApp={tasks} />
      </div>
    </>
  );
};

export default App;
