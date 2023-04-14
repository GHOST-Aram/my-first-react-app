
export const Tasks = ({tasks}) => {
  return (
    <ul>
        {tasks.map((task) =>{
             return <li key={task.id}>{task.text}</li>
        })}
    </ul>
  )
}


