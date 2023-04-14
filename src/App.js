import './App.css';
import { Header } from './components/header'
import { Tasks } from './components/tasks';
import { tasks as tasklist }  from "./data/data"
import { useState } from "react"

import { Events } from './classes/events'

export const events  = new Events()

function App() {
  const [tasks, setTasks] = useState(tasklist)
  return (
    <div className="container">
     <Header title= 'Task Tracker'/>
     <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;
