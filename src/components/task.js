import React from 'react'
import PropTypes from 'prop-types'

export const Task = ({item}) => {
  return (
    <span>
        {item.text}
    </span>
  )
}

Task.prototypes = {
    item:PropTypes.object.isRequired
}


