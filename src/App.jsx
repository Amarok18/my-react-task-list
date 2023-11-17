import {BrowserRouter,Routes,Route} from "react-router-dom"
import { lazy, Suspense } from "react";
import {React} from 'react'
import "../src/App.css"
import { Loading } from "./componentes/Loading";
// import { SobreNosotros } from "./componentes/SobreNosotros";
// import { TaskApp } from "./componentes/TaskApp";


function App() {
  const Home = lazy(()=>import("./componentes/Home"))
  const TaskApp = lazy(()=>import("./componentes/TaskApp"))
  const SobreNosotros = lazy(()=>import("./componentes/SobreNosotros"))
  return (
      <div>
      <BrowserRouter> 
       <Suspense fallback={<div><Loading/></div>}>
        <Routes>
          <Route path="/" element={<div className="page home"><Home/></div>}/>
          <Route path="/sobrenosotros" element={<div className="page sobreNosotros"><SobreNosotros/></div>}/>
          <Route path="/tareas" element={<div className="page taskApp"><TaskApp/></div>}/>
          <Route path="*" element={<h1>Error 404</h1>}/>
        </Routes>
        </Suspense> 
       </BrowserRouter>
      </div>
  )
}

export default App
