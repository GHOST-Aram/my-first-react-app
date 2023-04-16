import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './button'
import { useLocation } from 'react-router-dom'


export const Header = ({title, onAdd, showTaskForm}) => {
    const location = useLocation()
    return (
        <header className='header'>
            {title}
            {
                // Render button only if loaction is home
                location.pathname === '/' && <Button color = {showTaskForm ? 'orangered' : 'green'} 
            text = {showTaskForm ? 'Close' : 'Add Task'} onClick = {onAdd}/>
            }
        </header>
    )
}
Header.defaultProps = {
    title: 'Tracking Raths'
}
Header.propTypes = {
    title : PropTypes.string.isRequired,
}