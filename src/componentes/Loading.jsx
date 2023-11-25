import React from 'react'
import '../styles/Loading.css'
import { Box } from '@chakra-ui/react'

function Loading() {
  return (
    <Box className="loader-container">
        <Box className="spinner"></Box>
    </Box>
  )
}

export {Loading}