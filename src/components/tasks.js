import PropTypes from 'prop-types'
import { Task } from './task'
export const Tasks = ({tasks}) => {
    const deleteTask = (e) => console.log(e.target.parentNode)

  return (
    <ul>
        {
        tasks.map((task) =>{
             return <li key={task.id}>
                <Task item = {task} onDelete={deleteTask}/>
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
    tasks: PropTypes.array
}

