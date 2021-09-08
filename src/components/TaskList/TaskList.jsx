import './TaskList.css';
import TaskLabel from '../TaskLabel/TaskLabel';

function TaskList({ tasks }) {

    return (
        <ul className="labelWrapper">
            {tasks.map(task => {
                return <TaskLabel>{task}</TaskLabel>
            })}
        </ul>
    )
}

export default TaskList;