import React, { useState} from 'react';
import TaskList from './TaskList';
import { useCBAHook } from '../hooks/useCBAHook';


function Task(){
    const [task,setTask]=useState(" ");
    // const {tasks, createTask, deleteTask, updateTask} = useCBAHook();
    const [isClicked,setIsClicked]=useState(false);
    
    function handleClick(){
        
        setIsClicked(true)
    }
    const handleDelete = id =>{
        deleteTask(id);
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
            <label className='label-task-description'>
                <input placeholder="task" id="task-input" onChange={e=>setInput(e.target.value)}/>
                <input placeholder="task description" id="description-input"/>
            </label>
            <button id="btn-add-task" onClick={()=>setIsClicked(true)}>Add Task</button>
            <button id="btn-cancel-task" >Cancel</button>
        </div>
    )
    }
}

export default Task;