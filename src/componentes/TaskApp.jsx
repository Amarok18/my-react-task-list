import React from 'react'
import { Menu } from './Menu'
import { Tasks } from './Tasks'
import '../styles/TaskApp.css'

function TaskApp() {
  return (
    <div className='TaskAppPage'>
        <Menu/>
        <div className='TaskApp_div'>
        <Tasks/>
        </div>
    </div>
  )
}

export default TaskApp