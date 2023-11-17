import React from 'react'
import { Menu } from './Menu'
import "../styles/SobreNosotros.css"

function SobreNosotros() {
  return (
    <div className='SobreNosotros_page'>
        <Menu/>
        <div className='SobreNosotros'>
        <h1 className='SobreNosotros_Title'>Sobre Nosotros</h1>    
        <br/>    
        <h2 className='descripcion_app'>Esta app de tareas creada en react permite al usuario tener una organizacion mas adecuada de sus tareas.</h2>
        <p>Funcionalidades:</p>
        <ul>
            <li><strong>Agregar Tareas:</strong> Con un simple clic, puedes agregar nuevas tareas a tu lista. Incluye campos para el título y la descripción de la tarea.</li>
            <li><strong>Borrar Tareas:</strong> Elimina tareas que ya has completado o que ya no son relevantes para mantenerte enfocado/a en lo que realmente importa.</li>
            <li><strong>Editar Tareas:</strong> Si necesitas hacer cambios en una tarea, puedes editar tanto el título como la descripción para mantener tu lista actualizada.</li>
            <li><strong>Validacion de Tareas:</strong> La aplicación garantiza que ninguna tarea tenga menos de dos caracteres, evitando entradas inválidas.</li>
        </ul>
        <p>Tecnologias:</p>
        <ul>
            <li><strong>React:</strong> La interfaz de usuario de la aplicación se construye utilizando React, lo que proporciona una experiencia de usuario fluida y reactiva.</li>
            <li><strong>React Hooks</strong> Empleamos los hooks de React para gestionar el estado del componente de manera más efectiva, mejorando la legibilidad y mantenimiento del código.</li>
            <li><strong>LocalStorage</strong> Guardamos los datos localmente en el navegador del usuario mediante el uso de LocalStorage para preservar las tareas incluso después de cerrar la aplicación.</li>
            <li><strong>Estilos con CSS:</strong> La presentación visual de la aplicación se realiza mediante estilos CSS, proporcionando un diseño agradable y responsive.</li>
        </ul>
        </div>
    </div>
  )
}

export default SobreNosotros