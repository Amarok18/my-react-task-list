import React from 'react';
import "./Task.css"

function Task(){
    return (<div className="Task">
        <input type="text" id="Input-txt" placeholder="Add your new task"/>
        <button id="btn-add">+</button>
    </div>)
}

export default Task;