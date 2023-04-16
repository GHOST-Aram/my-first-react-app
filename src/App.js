import './App.css';
import { About } from './components/about';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from './components/footer';
import { Header } from './components/header'
import { Tasks } from './components/tasks';
import { fetchData, fetchTask }  from "./data/data"
import { useState, useEffect } from "react"
import { TaskForm } from './components/taskForm';

const App = () => {
  // Task form is displayed
  const [taskForm, setTaskForm] = useState(false)

  // Tasks
  const [tasks, setTasks] = useState([])
  // Delete task with matching id from local array
  
  // Delete task matching id from server
  const deleteTask = async (id) =>{
    // Delete tasks from DB
    await fetch(`http://localhost:5000/tasks/${id}`, 
    {method: 'DELETE'})

    // Update tasks
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle reminder: Map task to task with opposite id if provided id matches a task id : Otherwise return task unchanged
  const toggleReminder = async(id) => {
    //Fetch target task to be toggled from db
    const taskToUpdate = await fetchTask(id)

    // Change value of reminder to opposite
    const updatedTask = {...taskToUpdate, reminder:!taskToUpdate.reminder}// Spread poperties of task then change reminder value

    // Update db.json: Replace the task with updated task in DB
    // This operation returns the task that has been placed in db.json as a promise
    const response = await fetch(`http://localhost:5000/tasks/${id}`,
    {method: 'PUT',
    headers: {
        'Content-type': 'application/json'
    },

    body: JSON.stringify(updatedTask)

  })
  //Update tasks
    const data = await response.json() //
    setTasks(tasks => tasks.map(task => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  // Save new Task
  const saveTask = async(task) =>{

    //Store to database
    const response = await fetch('http://localhost:5000/tasks', {
      method : 'POST',// use HTTP method POST
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task) //Convert task to json string
        })
      const data =  await response.json()

      // Update state: Add new task to tasks : Use JS Spread operator
      setTasks([...tasks, data]) 

    // // Add task id 
    // const newTask = {id: tasks.length + 1, ...task}

    // // Update tasks state
    // setTasks([...tasks, newTask])
  }
  // Use react useEffect method to update tasks with data from db
  useEffect(() =>{
    const getTasks = async() => {
      
      //Fet tasks from db.json
      const fetchedTasks = await fetchData()
      
      // Update state : Store tasks in tasks array
      setTasks(fetchedTasks)
    }
    // Get tasks from db.json and store in state- tasks
    getTasks()
  }, [])
return (
  <Router> {/*Enable routing by wrapping everything in a router component*/}

    <div className="container">
      <Header title = 'Task Tracker' onAdd = {() => setTaskForm(!taskForm)} showTaskForm = {taskForm}/>

      <Routes> {/**Wrap all routes inf=t in routes component */}
        <Route exact path='/' Component={ //Render component as prop in a Route component with its path
          (props) =>(
          <>
            {taskForm && <TaskForm onSave ={saveTask}/>}
            {
            // {/* Render Conditionally based on state of Array - Empty / not empty */}
            tasks.length > 0 ? 
            <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> 
            : <h1>No Tasks to Display</h1>
            }
          </>
          )
          }/>
        <Route path='/about' Component={About}/>
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
