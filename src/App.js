import React,{useState} from "react";
import './App.css';
import TaskForm from './components/taskForm'
import TasksList from './components/tasksList'


function App() {
  const [tasks, setTasks] = useState([
    {
      id:"1",
      title: "Learn javascript",
      isComplete:true,
    },
    {
      id:"2",
      title: "Learn react",
      isComplete:true,

    },
    {
      id:"3",
      title: "Build a todo app",
      isComplete:true,

    }
  ])

  const addTask=(title)=>{
    setTasks([...tasks, { title}])
  }

   const updateTask = (id, title) => {
     const newTasks = tasks.map(task => task.id === id?({title}): task)
     setTasks(newTasks)
   }

   const deleteTask = (id) => {
    const newTasks=tasks.filter(task=>task.id!==id)
    setTasks(newTasks)
  } 
  const completeTask = id => {
    const newTasks = [...tasks];
    newTasks[id].isCompleted = true;
    setTasks(newTasks);
  };


  return (
    <div className="App">
   <h2>Todos</h2>
          <TaskForm addTask={addTask} />
          {<TasksList tasks={tasks} deleteTask={deleteTask} updateTask ={updateTask} completeTask= {completeTask} />}
        
    </div>
  );
}

export default App;
