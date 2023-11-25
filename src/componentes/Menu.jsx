import {Link} from "react-router-dom"
import { Box, Heading, ScaleFade } from  '@chakra-ui/react';
import {
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from 'react'
import "../styles/Menu.css"

function Menu() {
  return (
    <Box className="Menu">
      <Heading ml={"44vw"} pt={"2vh"} className="title_Menu">
        Menu
      </Heading>
      <UnorderedList
        ml={"2vw"}
        pt={"2vh"}
        className="links"
        listStyleType={"none"}
      >
        <ListItem
          _hover={{
            transform: "scale(1.5,1.5)",
            transition: "all 300ms",
          }}
        >
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem
          _hover={{
            transform: "scale(1.3,1.3)",
            transition: "all 300ms",
          }}
        >
          <Link to="/tareas">App de Tareas</Link>
        </ListItem>
        <ListItem
          _hover={{
            transform: "scale(1.3,1.3)",
            transition: "all 300ms",
          }}
        >
          <Link to="/sobrenosotros">SobreNosotros</Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

export {Menu}