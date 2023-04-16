import PropTypes from 'prop-types'

/**
 * 
 * @param {*} param0 
 * @returns 
 * @props :{
 * color: Background color to be set on the button
 * onClick: Click event hanler function
 * text: Text Content for the button
 * }
 */
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

