import React from 'react'
import { Menu } from './Menu';
import "../styles/Home.css"

function Home() {
  return (
    <div className='hero'>
        <Menu/>
        <div className='hero__title'>
        <div className='bienvenidos_div'><h1>Bienvenidos</h1></div>
        <h2>A mi app de lista de tareas.</h2>
        <br/>
        <p className='description'>Organiza tu vida fácilmente con nuestra interfaz intuitiva.¡Que disfrutes organizando tus tareas y alcanzando tus objetivos!</p>
        </div>
        <div className='cube'></div>
        <div className='cube'></div>
        <div className='cube'></div>
        <div className='cube'></div>
        <div className='cube'></div>
        <div className='cube'></div>
    </div>
  )
}

export default Home;