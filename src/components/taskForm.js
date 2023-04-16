import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
/**
 * Task form component used to create a task creation form
 * @param {*} param0 
 * props: {onSave: Event handler function that fires when form is submitted}
 * @returns An HTML Form with the following input field
 *             1. Text Input filed for Task.text
 *             2. Calendar/Date input field for task.day
*              3. Check box input field for setting task.reminder
 */
export const TaskForm = ({onSave}) => {
    // Use react Hook useState to initialize values of task properties  
    const [text, setText] = useState('') //Initialize text to empty string
    const [day, setDate] = useState('') //Initilize date to empty string
    const [reminder, setReminder] = useState(false) //Initialize reminder to boolean false

    //Handle submit event
    const submit = (e) =>{
        e.preventDefault()
        // Save new task object when form is submitted
        onSave({text, day, reminder})

        setDate('') // reset date input box
        setText('') // reset text input box
        setReminder(false) // reset reminder checkbox
    }

  return (
    <form className='add-form container' onSubmit={submit}>
        {/* Task description */}
        <div className='form-control'>
            <label htmlFor='task'>Task</label>
            <input required type="text" placeholder='Task text' id='task-text' value ={text} onChange={(e) => setText(e.target.value)}/>
        </div>

        {/* Task Date */}
        <div className='form-control'>
            <label htmlFor='date'>Date</label>
            <input required type="date" name="date" placeholder='Date' id='date' value ={day} onChange={(e) => setDate(e.target.value)}/>
        </div>

        {/* Reminder */}
        <div className='form-control-check'>
            <label htmlFor="reminder">Set Reminder</label>
            <input type="checkbox" name="reminder" id="reminder" checked ={reminder} onChange={(e) => setReminder(e.target.checked)}/>
        </div>
        <div>
            <button type="submit" className='btn btn-block'>Save Task</button>
        </div>
    </form>
  )
}

TaskForm.propTypes = {
    onSave: PropTypes.func,
}