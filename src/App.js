import './App.css';
import { Header } from './components/header'
import { Tasks } from './components/tasks';
import { tasks as tasklist }  from "./data/data"
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState(tasklist)
  // Delete task with matching id
  const deleteTask = (id) =>  setTasks(tasks.filter(task => task.id !== id))
  return (
    <div className="container">
     <Header title= 'Task Tracker'/>
     {tasks.length > 0 ? <Tasks tasks = {tasks} deleteTask={deleteTask}/> : <h1>No Tasks to Display</h1>}
    </div>
  );
}

export default App;
