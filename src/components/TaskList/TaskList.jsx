import './TaskList.css';
import TaskLabel from '../TaskLabel/TaskLabel';

function TaskList({ tasks, setTasks }) {

    const handleDelete = id => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    return (
        <ul className="labelWrapper">
            {tasks.map(task => {
                return <TaskLabel key={task.id} handleDelete={() => handleDelete(task.id)}>{task.text}</TaskLabel>
            })}
        </ul>
    )
}

export default TaskList;