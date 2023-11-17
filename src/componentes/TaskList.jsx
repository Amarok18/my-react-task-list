import React from 'react';
import { useState } from 'react';


function TaskList(props){
    const {element,btnDelete,updateTask}=props;
    const [isEdited,setIsEdited]=useState(false);
    const [newInput,setNewInput]=useState('');
    const [newDescript,setNewDescript]=useState('');
    const [isChecked,setIsChecked]=useState(element.status);
    console.log(element.id)
   

    function handleEdit(){
        setIsEdited(true);
        setNewInput(element.task)
        setNewDescript(element.description)
        setIsChecked(isChecked)
    }
    function handleCancel(){
        setIsChecked(isChecked);
        setIsEdited(false);
        setNewInput(element.task);
        setNewDescript(element.description);

    }
    
    function handleSave(){
        if(newInput.length<=2){
        alert("Tu tarea debe ser mayor de 2 caracteres")
        }else{
        updateTask(element.id,newInput,newDescript)
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
             <label className="label-orig">
                <input id="Input-1" type='checkbox' checked={isChecked} onChange={()=>setIsChecked(!isChecked)} />
             <div className='task_description_div'>
                <p className='tasklist-input'>{element.task}</p>
                <p className='descriptionlist-input'>{element.description}</p>
                </div>
             <div className='edit_delete_btns'>
                <button id="btn-edit"onClick={handleEdit}>✏️</button>
                 <button id="btn-delete"onClick={handleDelete}>🗑️</button>
             </div>
             </label>
        </div>
    ) 
    }else{
    return(
        <div id="editDiv">
            <label className='label-edit'>
            <input id="edit-input" value={newInput} onChange={(e)=>setNewInput(e.target.value)}/>
            <input  id="edit-description" type="text" value={newDescript} onChange={(e)=>setNewDescript(e.target.value)}/>
            <div className='save_cancel_div'>
            <button id="btn-save" onClick={handleSave}>✅</button>
            <button id="btn-cancel" onClick={handleCancel}>❌</button> 
            </div>
            </label>
            
        </div>
       );
    }
    
}

export default TaskList;