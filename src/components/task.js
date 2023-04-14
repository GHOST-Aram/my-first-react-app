import { FaTimes } from 'react-icons/fa'
import React from 'react'
import PropTypes from 'prop-types'

export const Task = ({item, onDelete, onToggle}) => {
        
  return (
    <div className= {`task ${item.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(item.id)}>
        <h1 style={{fontSize: 'large'}}>
            <span>{item.text}</span>
            <FaTimes onClick = {() => onDelete(item.id)} 
            style={{color: 'red', cursor: 'pointer'}} 
            />
        </h1>
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


