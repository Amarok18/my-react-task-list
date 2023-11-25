import React from 'react'
import { Menu } from './Menu'
import "../styles/SobreNosotros.css"
import { Box, Heading, ListItem, UnorderedList ,Text} from '@chakra-ui/react'

function SobreNosotros() {
  return (
    <Box className='SobreNosotros_page'>
        <Menu/>
        <Box className='SobreNosotros'>
        <Heading ml={"11vw"} className='SobreNosotros_Title'>Sobre Nosotros</Heading>    
        <br/>    
        <Heading className='descripcion_app'>Esta app de tareas creada en react permite al usuario tener una organizacion mas adecuada de sus tareas.</Heading>
        <Text>Funcionalidades:</Text>
        <UnorderedList>
            <ListItem><strong>Agregar Tareas:</strong> Con un simple clic, puedes agregar nuevas tareas a tu lista. Incluye campos para el título y la descripción de la tarea.</ListItem>
            <ListItem><strong>Borrar Tareas:</strong> Elimina tareas que ya has completado o que ya no son relevantes para mantenerte enfocado/a en lo que realmente importa.</ListItem>
            <ListItem><strong>Editar Tareas:</strong> Si necesitas hacer cambios en una tarea, puedes editar tanto el título como la descripción para mantener tu lista actualizada.</ListItem>
            <ListItem><strong>Validacion de Tareas:</strong> La aplicación garantiza que ninguna tarea tenga menos de dos caracteres, evitando entradas inválidas.</ListItem>
        </UnorderedList>
        <Text>Tecnologias:</Text>
        <UnorderedList>
            <li><strong>React:</strong> La interfaz de usuario de la aplicación se construye utilizando React, lo que proporciona una experiencia de usuario fluida y reactiva.</li>
            <li><strong>React Hooks</strong> Empleamos los hooks de React para gestionar el estado del componente de manera más efectiva, mejorando la legibilidad y mantenimiento del código.</li>
            <li><strong>LocalStorage</strong> Guardamos los datos localmente en el navegador del usuario mediante el uso de LocalStorage para preservar las tareas incluso después de cerrar la aplicación.</li>
            <li><strong>Estilos con CSS:</strong> La presentación visual de la aplicación se realiza mediante estilos CSS, proporcionando un diseño agradable y responsive.</li>
        </UnorderedList>
        </Box>
    </Box>
  )
}

export default SobreNosotros