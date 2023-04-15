import './App.css';
import { Header } from './components/header'
import { Tasks } from './components/tasks';
import { tasks as tasklist, fetchData }  from "./data/data"
import { useState, useEffect } from "react"
import { TaskForm } from './components/taskForm';

function App() {
  // Task form is displayed
  const [taskForm, setTaskForm] = useState(false)

  // Tasks
  const [tasks, setTasks] = useState([])
  // Delete task with matching id
  const deleteTask = (id) =>  setTasks(tasks.filter(task => task.id !== id))

  // Toggle reminder: Map task to task with opposite id if provided id matches a task id : Otherwise return task unchanged
  const toggleReminder = (id) => setTasks(tasks => tasks.map(task => task.id === id ? {...task, reminder:!task.reminder} : task))

  // Save new Task
  const saveTask = (task) =>{

    // Add task id
    const newTask = {id: tasks.length + 1, ...task}

    // Update tasks state
    setTasks([...tasks, newTask])
  }

  //use Effect
  useEffect(() =>{
    const getTasks = async() => {
      const fetchedTasks = await fetchData()

      // Update state
      setTasks(fetchedTasks)
    }
    getTasks()
  }, [])
return (
  <div className="container">
    <Header title= 'Task Tracker' onAdd = {() => setTaskForm(!taskForm)} showTaskForm = {taskForm}/>
    {taskForm && <TaskForm onSave ={saveTask}/>}
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
