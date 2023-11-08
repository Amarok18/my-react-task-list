import {useState,useEffect} from "react"

export const useCBAHook = ()=>{
    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(savedTasks);
  }, []);

  const createTask = (task) => {
    if (task.length <= 2) {
      return alert('Tu tarea debe tener más de dos caracteres');
    }else{
    const newTask = {
      id: tasks.length + 1,
      task: task,
      status: false, 
    };
    setTasks([newTask,...tasks]);
    localStorage.setItem('tasks', JSON.stringify([newTask,...tasks]));
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const updateTask = (id, updatedText) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.task = updatedText;
      }
      return task;
    })
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask
  };
}
