import './App.css';
import { Header } from './components/header'
import { Tasks } from './components/tasks';
import { tasks as tasklist }  from "./data/data"
import { useState } from "react"

function App() {
  const deleteTask = (e) => console.log(e.target.parentNode)

  const [tasks, setTasks] = useState(tasklist)
  return (
    <div className="container">
     <Header title= 'Task Tracker'/>
     <Tasks tasks = {tasks} eventHandler={deleteTask}/>
    </div>
  );
}

export default App;
