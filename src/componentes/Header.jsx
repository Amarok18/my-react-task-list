import React from 'react';
import '../styles/Header.css'
import { Box, Heading } from '@chakra-ui/react';

function Header(){
    return (
    <Box>
        <Heading id='Titulo' ml={"43vw"} mb={"1vh"}>Todo App</Heading>
    </Box>);
}

export {Header};