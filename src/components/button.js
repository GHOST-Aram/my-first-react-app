import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  return (
    <button 
    style={{backgroundColor: props.color}}
    className='btn'
    onClick= {props.onClick}
    >
        {props.text}
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

