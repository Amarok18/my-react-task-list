import {useState,} from "react"

export const useCBAHook = ()=>{
    const [tasks, setTasks] = useState([]);
    const [descriptions,setDescription]=useState([])

  const createTask = (task) => {
    if (task.length <= 2) {
      return alert('Tu tarea debe tener más de dos caracteres');
    }else{
    const newTask = {
      id: tasks.length + 1,
      task: task,
      status: false, 
    };
    const updatedTask = [newTask, ...tasks]
    setTasks(updatedTask);
    }
  };
  const createDescription = (description) => {
    if (description.length <= 2) {
      return alert('Tu description debe tener más de dos caracteres');
    }else{
    const newDescription = {
      id: description.length + 1,
      task: description,
      status: false, 
    };
    const updatedDescription = [newDescription, ...descriptions]
    setDescription(updatedDescription);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const updateTask = (id, updatedText) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.task = updatedText;
      }
      return task;
    })
    setTasks(updatedTasks);
  };

  return {
    tasks,
    descriptions,
    createTask,
    deleteTask,
    updateTask
  };
}
}
