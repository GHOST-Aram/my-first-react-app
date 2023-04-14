import { FaTimes } from 'react-icons/fa'
import React from 'react'
import PropTypes from 'prop-types'
import { Events } from '../classes/events'

const events = new Events()
export const Task = ({item}) => {
  return (
    <div className='task'>
        <h1 style={{fontSize: 'large'}}>
            <span>{item.text}</span>
            <FaTimes onClick = {events.deleteTask(item)} style={{color: 'red', cursor: 'pointer'}} />
        </h1>
        <p>Day : {item.day}</p>
        {item.reminder ? <p>Reminder : Yes</p> : <p>Reminder: No</p>} 
    </div>
  )
}

Task.prototypes = {
    item:PropTypes.object.isRequired
}
Task.defaultProp = {
    item: {
        id: 0,
        text: 'No task Currently Listed',
        day: 'Jan 12th 1487',
        reminder: false,
    }
}


