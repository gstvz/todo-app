import './TaskList.css';
import TaskLabel from '../TaskLabel/TaskLabel';

function TaskList() {

    return (
        <ul className="labelWrapper">
            <TaskLabel />            
            <TaskLabel /> 
            <TaskLabel />
        </ul>
    )
}

export default TaskList;