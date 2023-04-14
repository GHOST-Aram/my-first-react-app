import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

export const TaskForm = ({onSave}) => {
    // Set states
    const [text, setText] = useState('')
    const [day, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    //Handle submit event
    const submit = (e) =>{
        e.preventDefault()

        onSave({text, day, reminder})
        setDate('')
        setText('')
        setReminder(false)
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
    onSubmit: PropTypes.func,
}