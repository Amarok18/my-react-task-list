import React, { useState} from 'react';
import TaskList from './TaskList';
import { useCBAHook } from '../hooks/useCBEHook';


function Task(){
    const [input,setInput]=useState(" ");
    const {tasks, createTask, deleteTask, updateTask} = useCBAHook();
    console.log(tasks);
    function handleClick(){
        createTask(input);
        setInput('');
    }
    const handleDelete = id =>{
        deleteTask(id);
    }
                                                                                                                                                                                                                                                                                                                            
    
    return (
    <div className="Task">
        <label><input type="text" id="Input-txt"  placeholder="Add your new task" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button id="btn-add" onClick={handleClick}>+</button>
        </label>
       
        <div id="alltask">
            {tasks.map((item)=>{
                console.log(item)
                return <TaskList key={item.id} element={item} btnDelete={handleDelete} updatedTask={updateTask}/>
            })}
        </div>
    </div>
    )
}

export default Task;