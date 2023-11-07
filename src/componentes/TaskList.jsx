import React from 'react';
import { useState } from 'react';
import "./Tasklist.css"

function TaskList(props){
    const {element,btnDelete}=props;
    const [isEdited,setIsEdited]=useState(false);
    const [newInput,setNewInput]=useState('');
    const [isChecked,setIsChecked]=useState(element.status);

    console.log(isChecked)

    function handleEdit(){
        setIsEdited(true);
        setNewInput(element.task)
        setIsChecked(isChecked)
    }
    function handleCancel(){
        setIsChecked(isChecked);
        setIsEdited(false);

    }
    
    function handleSave(){
        if(newInput.length<=2){
        alert("Tu tarea debe ser mayor de 2 caracteres")
        }else{
        element.task = newInput;
        setIsChecked(true);
        setIsEdited(false)
        }
    }


    function handleDelete(){
      btnDelete(element.id)
    }
    if(!isEdited){
    return(
        <div id="originDiv">
             <label className="label-orig"><input id="Input-1" type='checkbox' checked={isChecked} onChange={e=>setIsChecked(!isChecked)} /><p className='task-input'>{element.task}</p>
             <button id="btn-edit"onClick={handleEdit}>✏️</button>
             <button id="btn-delete"onClick={handleDelete}>🗑️</button>
             </label>
        </div>
    ) 
    }else{
    return(
        <div id="editDiv">
            <label className='label-edit'><input id="edit-input" value={newInput} onChange={(e)=>setNewInput(e.target.value)}/>
            <button id="btn-save" onClick={handleSave}>✅</button>
            <button id="btn-cancel" onClick={handleCancel}>❌</button>
            </label>
            
        </div>
       );
    }
    
}

export default TaskList;