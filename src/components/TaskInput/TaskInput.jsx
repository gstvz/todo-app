import './TaskInput.css';
import Button from '../Button/Button';

function TaskInput() {

    return (
        <div className="wrapper">
            <input
                placeholder="Add your new todo"
            >
            </input>
            <Button className="add" content="add" />
        </div>
    )
}

export default TaskInput;