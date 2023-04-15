import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './button'


export const Header = ({title, onAdd, showTaskForm}) => {
    
    return (
        <header className='header'>
            {title}
            <Button color = {showTaskForm ? 'orangered' : 'green'} 
            text = {showTaskForm ? 'Close' : 'Add Task'} onClick = {onAdd}/>
        </header>
    )
}
Header.defaultProps = {
    title: 'Tracking Raths'
}
Header.propTypes = {
    title : PropTypes.string.isRequired,
}