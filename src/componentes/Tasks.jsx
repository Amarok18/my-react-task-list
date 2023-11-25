import React from 'react'
import {Header} from "./Header"
import { Task } from './Task'
import {Box} from "@chakra-ui/react"

function Tasks(){
  return (
    <Box>
       <Header/>
       <Task/>
    </Box>
  )
}

export {Tasks}
