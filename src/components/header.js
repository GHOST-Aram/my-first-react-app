import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './button'
import { events } from '../App'

export const Header = ({title}) => {
  return (
      <header className='header'>
        {title}
        <Button color = 'green' text = 'Add' onClick = {console.log(events.killJoy('Kill JOy'))}/>
      </header>
  )
}
Header.defaultProps = {
    title: 'Tracking Raths'
}
Header.propTypes = {
    title : PropTypes.string.isRequired,
}