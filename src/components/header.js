import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './button'


export const Header = ({title, onAdd}) => {
    
    return (
        <header className='header'>
            {title}
            <Button color = 'green' text = 'Add' onClick = {onAdd}/>
        </header>
    )
}
Header.defaultProps = {
    title: 'Tracking Raths'
}
Header.propTypes = {
    title : PropTypes.string.isRequired,
}