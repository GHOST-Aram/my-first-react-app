import './App.css';
import { Header } from './components/header'
import { Tasks } from './components/tasks';
import { tasks as tasklist }  from "./data/data"
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState(tasklist)
  const deleteTask = (id) =>  setTasks(tasks.filter(task => task.id !== id))
  return (
    <div className="container">
     <Header title= 'Task Tracker'/>
     <Tasks tasks = {tasks} eventHandler={deleteTask}/>
    </div>
  );
}

export default App;
