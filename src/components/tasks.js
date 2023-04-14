import PropTypes from 'prop-types'
import { Task } from './task'
export const Tasks = ({tasks, onDelete, onToggle}) => {

  return (
    <ul>
        {
        tasks.map((task) =>{
             return <li key={task.id}>
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
    eventHandler: PropTypes.func,
}

