import React, { useState} from 'react';
import TaskList from './TaskList';
import { useCBAHook } from '../hooks/useCBAHook';


function Task(){
    const [task,setTask]=useState("");
    const [description,setDescription]=useState("");
    const {tasks, createTask, deleteTask, updateTask} = useCBAHook();
    const [isClicked,setIsClicked]=useState(false);
    
    function handleClick(){
        setIsClicked(true)
    }
    const handleDelete = id =>{
        deleteTask(id);
    }
    function handleOnClickAdd(){
        createTask(task)
    }                                                                                                                                                                                                                                                                            
    
    if(!isClicked){    
    return (
    <div className="Task">
        <label>
        <button id="btn-add" onClick={handleClick}>Add a new task</button>
        </label>
    </div>
    )
    }else{
    return(
        <div className="task-description">
            <form>
            <label className='label-task-description'>
                <input placeholder="task" id="task-input" value={task} onChange={e=>setTask(e.target.value)}/>
                <input placeholder="task description" value={description} onChange={e=>setDescription(e.target.value)} id="description-input"/>
            </label>
            </form>
            <button id="btn-add-task" onClick={handleOnClickAdd}>Add Task</button>
            <button id="btn-cancel-task">Cancel</button>
        </div>
    )
    }
}

export default Task;