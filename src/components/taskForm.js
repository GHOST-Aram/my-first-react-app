import React from 'react'

export const TaskForm = () => {
  return (
    <form className='add-form container'>
        <div className='form-control'>
            <label htmlFor='task'>Task</label>
            <input type="text" placeholder='Task text' id='task-text' />
        </div>
        <div className='form-control'>
            <label htmlFor='date'>Date</label>
            <input type="datetime" placeholder='Date' id='date' />
        </div>
        <div className='form-control-check'>
            <label htmlFor="reminder">Set Reminder</label>
            <input type="checkbox" name="reminder" id="reminder" />
        </div>
        <div>
            <button type="submit" className='btn btn-block'>Save Task</button>
        </div>
    </form>
  )
}
