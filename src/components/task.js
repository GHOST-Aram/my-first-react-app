import { FaTimes } from 'react-icons/fa'
import React from 'react'
import PropTypes from 'prop-types'

/**
 * 
 * @param {*} param0 
 * props: {
 *  item: task to display
 *  onDelete: Delete task event handler, fires when the red X is clicked
 *  onToggle: Toggle reminder event handler, fires when a task double clicked
 * }
 * @returns div element wrapping all task properties to display
 */
export const Task = ({item, onDelete, onToggle}) => {

  return (
    // Set className to reminder if task.reminder is true
    <div className= {`task ${item.reminder && 'reminder'}`} 

    // When task is double clicked: Its reminder property is negated
    // Once its negated, the className attribute is adjusted to appropriate value
    onDoubleClick={() => onToggle(item.id)}>

        <h1 style={{fontSize: 'large'}}>

            {/* Task name or text or description */}
            <span>{item.text}</span>

            {/* React Icon for an X used to represent delete icon */}
            <FaTimes onClick = {() => onDelete(item.id)} 
            style={{color: 'red', cursor: 'pointer'}} 
            />
        </h1>

        {/* Task day rendered in a paragraph */}
        <p>Day : {item.day}</p>
    </div>
  )
}

Task.defaultProp = {
    item: {
        id: 0,
        text: 'No task Currently Listed',
        day: 'Jan 12th 1487',
        reminder: false,
    }
}

Task.prototypes = {
    item:PropTypes.object.isRequired,
    onDelete:PropTypes.func,
    onToggle:PropTypes.func
}


