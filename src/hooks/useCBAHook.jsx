import {useState,useEffect} from "react"

export const useCBAHook = ()=>{
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(storedTasks);
    
    useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (task,description) => {
    const newTask = {
      id: tasks.length+1,
      task: task,
      description: description,
      status: false, 
    };
    const updatedTask = [newTask, ...tasks]
    setTasks(updatedTask);
    
  };
  
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const updateTask = (id, updatedText,updatedDescrip) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.task = updatedText;
        task.description = updatedDescrip
      }
      return task;
    })
    setTasks(updatedTasks);
  };

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask
  };
}

