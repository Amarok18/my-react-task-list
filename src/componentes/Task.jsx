import React, { useState,useEffect } from 'react';
import TaskList from './TaskList';

function Task(){
    const [input,setInput]=useState(" ");
    const[tasks,setTasks]=useState([]);
    
    useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(savedTasks);
    }, []);

    function handleClick(){
      if (input.length <= 2) {
        alert('Tu tarea debe tener más de dos caracteres');
    } else {
     const newTask = {
      id: tasks.length + 1,
      task: input,
      status: false,
    };
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setInput('');
  }
    }
    const handleDelete = id =>{
        const updateTasks = tasks.filter(task => task.id !== id);
        setTasks(updateTasks)
        localStorage.setItem('tasks', JSON.stringify(updateTasks));
    }
    const updateTasks = (updatedTask) => {
      const updatedTasks = tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    
    return (
    <div className="Task">
        <label><input type="text" id="Input-txt"  placeholder="Add your new task" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button id="btn-add" onClick={handleClick}>+</button>
        </label>
       
        <div id="alltask">
            {tasks?.map((item)=>{
                return (
                  <TaskList
                    key={item?.id}
                    element={item}
                    btnDelete={handleDelete}
                    updateTasks={updateTasks}
                  />
                );
            })}
        </div>
    </div>
    )
}

export default Task;