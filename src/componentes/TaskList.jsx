import React from 'react';
import './TaskList.css'
function TaskList(){
    return (<div>
        <div className="T-1">
            <div className="T-In">
                <label for="Ta-1"><input id="Ta-1"type="checkbox"/>Buy a new gaming laptop</label>
            </div>
            <div className='items'>
                <button id="btn-del">🗑️</button>
                <button id="btn-edi">✏️</button>
            </div>
        </div>
            <div className="T-2">
                <div className="T-In">
                    <label for="Ta-2"><input id="Ta-2"type="checkbox"/>Complete my HTML course</label>
                </div>
                <div className='items'>
                    <button id="btn-del">🗑️</button>
                    <button id="btn-edi">✏️</button>
                </div>
            </div>
            <div className="T-3">
                <div className="T-In">
                    <label for="Ta-3"><input id="Ta-3"type="checkbox"/>Complete my FullStack Bootcamp</label>
                </div>
                <div className='items'>
                    <button id="btn-del">🗑️</button>
                    <button id="btn-edi">✏️</button>
                </div>
                </div>
                <div className="T-4">
                <div className="T-In">
                    <label for="Ta-3"><input id="Ta-3"type="checkbox"/>Complete my React Lessons</label>
                </div>
                <div className='items'>
                    <button id="btn-del">🗑️</button>
                    <button id="btn-edi">✏️</button>
                </div>
                </div>
    </div>);
}

export default TaskList;