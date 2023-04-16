import PropTypes from 'prop-types'
import { Task } from './task'
/**
 * 
 * @param {*} param0 
 * properties: {
 *  tasks: Array of task objects
 *  onDelete: Delete task event handler: Removes task from array
 *  onToggle: Function that toggles reminder to true if false and false if true
 *  
 *  onToggle and onDelete are suplied to each Task component in the array as properties 
 *  Each Task Component takes task object from the array
 * }
 * @returns Unordered list node with all tasks as its children
 */
export const Tasks = ({tasks, onDelete, onToggle}) => {

  return (
    <ul>
        {
        tasks.map((task, index) =>{
             return <li key={index}>
                <Task item = {task} onDelete={onDelete} onToggle={onToggle}/>
             </li>
        })
        }
    </ul>
  )
}
Tasks.defaultProps = {
    tasks : [
        {
            id: 0,
            text: 'No task Currently Listed',
            day: 'Jan 12th 1487',
            reminder: false,
        }
    ]
}

Tasks.propTypes = {
    tasks: PropTypes.array,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
}

