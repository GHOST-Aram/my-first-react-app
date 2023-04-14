import './App.css';
import { Header } from './components/header'
import { Tasks } from './components/tasks';
import { tasks as tasklist }  from "./data/data"
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState(tasklist)
  // Delete task with matching id
  const deleteTask = (id) =>  setTasks(tasks.filter(task => task.id !== id))

  // Toggle reminder: Map task to task with opposite id if provided id matches a task id : Otherwise return task unchanged
  const toggleReminder = (id) => setTasks(tasks => tasks.map(task => task.id === id ? {...task, reminder:!task.reminder} : task))
  return (
    <div className="container">
     <Header title= 'Task Tracker'/>
     {/* Render Conditionally based on state of Array - Empty / not empty */}
     {
     tasks.length > 0 ? 
     <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> 
     : <h1>No Tasks to Display</h1>
     }
    </div>
  );
}

export default App;
