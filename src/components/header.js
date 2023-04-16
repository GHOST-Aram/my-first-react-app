import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './button'
import { useLocation } from 'react-router-dom'


export const Header = ({title, onAdd, showTaskForm}) => {
    // Get current url being displayed
    const location = useLocation()
    return (
        <header className='header'>
            {title}
            {
                // Conditional Rendering: Render button only if loaction is home 
                location.pathname === '/' && <Button 
                color = {showTaskForm ? 'orangered' : 'green'} //Change bgcolor when form is displayed
                // Conditional rendering: Render text content = close when form is shown
                text = {showTaskForm ? 'Close' : 'Add Task'} 
                onClick = {onAdd}
            />
            }
        </header>
    )
}
Header.defaultProps = {
    title: 'Tracking Raths'
}
Header.propTypes = {
    title : PropTypes.string.isRequired,
    onAdd: PropTypes.func,
    showTaskForm: PropTypes.bool
}