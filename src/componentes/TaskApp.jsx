import React from 'react'
import { Menu } from './Menu'
import { Tasks } from './Tasks'
import '../styles/TaskApp.css'
import { Box } from '@chakra-ui/react'

function TaskApp() {
  return (
    <Box className='TaskAppPage'>
        <Menu/>
        <Box className='TaskApp_div'>
        <Tasks/>
        </Box>
    </Box>
  )
}

export default TaskApp