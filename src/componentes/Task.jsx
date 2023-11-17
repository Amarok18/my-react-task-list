import React, { useState,useEffect} from 'react';
import TaskList from './TaskList';
import { useCBAHook } from '../hooks/useCBAHook';


function Task(){
    const [task,setTask]=useState("");
    const [description,setDescription]=useState("");
    const [errortask,setErrorTask]=useState("")
    const {tasks, createTask, deleteTask, updateTask} = useCBAHook();
    const [isClicked,setIsClicked]=useState(false);
    
    useEffect(() => {
    if (task.length <= 2 && task != "") {
      setErrorTask("Tu tarea debe contener mas de 2 caracteres");
    } else {
      setErrorTask("");
    }
    }, [task]); 
    
    function handleClick(e) {
     e.stopPropagation();
     setIsClicked(true);
     }

    function handleDelete(id) {
    deleteTask(id);
    setIsClicked(false);
    }

    function handleOnClickAdd(){
        createTask(task,description)
        setIsClicked(false)
        setTask("");
        setDescription("")
    }
    function handleCancel(){
        setIsClicked(false)
        setTask("");
        setDescription("")
    }                                                                                                                                                                                                                                                                            
    
    if(!isClicked){    
    return (
    <div className="Task">
        <label>
        <button id="btn-add" onClick={handleClick}>Add a new task</button>
            </label>
        <div>
            {tasks.map((item)=>{
                return <TaskList key={item.id} element={item} btnDelete={handleDelete} updateTask={updateTask}/>
            })}
        </div>
    </div>
    )
    }else{
    return(
        <div className="task_and_description">
            <div className="task_and_buttons">
            <label className='label-task-description'>
                <span className="error_task">{errortask}</span>
                <input placeholder="task" id="inputForTask" value={task} onChange={e=>setTask(e.target.value)}/>
                <input placeholder="task description" value={description} onChange={e=>setDescription(e.target.value)} id="description-input"/>
            </label>
            <button id="btn-add-task" onClick={handleOnClickAdd} disabled={task.length<=2}>Add Task</button>
            <button id="btn-cancel-task" onClick={handleCancel}>Cancel</button>
            </div>
            <div>
            {tasks.map((item)=>{
                return <TaskList key={item.id} element={item} btnDelete={handleDelete} updateTask={updateTask}/>
            })}
        </div>
        </div>

    );
    }
}

export default Task;