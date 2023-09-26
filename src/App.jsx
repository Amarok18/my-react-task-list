
import Header from './componentes/Header';
import Task from './componentes/Task';
import TaskList from './componentes/TaskList';
import './App.css'

function App() {
  return (
      <div>
      <Header />
      <Task />
      <TaskList/>
      <button className="Cl-all-btn">Clear All</button>
      </div>
  )
}

export default App
