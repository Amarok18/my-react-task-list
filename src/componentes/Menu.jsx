import {Link} from "react-router-dom"
import React from 'react'
import "../styles/Menu.css"

function Menu() {
  return (
    <div className="Menu">
        <h1 className="title_Menu">Menu</h1> 
        <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tareas">App de Tareas</Link>
        </li>
        <li>
          <Link to="/sobrenosotros">SobreNosotros</Link>
        </li>
      </ul>
  
      </div>
  )
}

export {Menu}