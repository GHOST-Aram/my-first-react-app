import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({color, onClick, text}) => {
  return (
    <button 
    style={{backgroundColor: color}}
    className='btn'
    onClick= {onClick}
    >
        {text}
    </button>
  )
}
Button.defaultProps = {
    color : 'steelblue',
    text: 'New Button',
}
Button.prototypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,

}

