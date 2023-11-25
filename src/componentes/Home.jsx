import React from 'react'
import { Menu } from './Menu';
import "../styles/Home.css"
import { Box, Heading, Text } from '@chakra-ui/react';

function Home() {
  return (
    <Box className="hero">
      <Menu />
      <Box className="hero__title">
        <Box className="bienvenidos_div">
          <Heading size="4xl" fontFamily={"Super Mario World Text Box"}>
            Bienvenidos
          </Heading>
        </Box>
        <Heading fontFamily={"Super Mario World Text Box"} w={"100%"} fontSize={"25px"}>
          A mi app de lista de tareas.
        </Heading>
        <br />
        <Text className="description">
          Organiza tu vida fácilmente con nuestra interfaz intuitiva.¡Que
          disfrutes organizando tus tareas y alcanzando tus objetivos!
        </Text>
      </Box>
      <Box className="cube"></Box>
      <Box className="cube"></Box>
      <Box className="cube"></Box>
      <Box className="cube"></Box>
      <Box className="cube"></Box>
      <Box className="cube"></Box>
    </Box>
  );
}

export default Home;