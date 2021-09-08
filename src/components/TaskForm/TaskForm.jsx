import './TaskForm.css';
import Button from '../Button/Button';

function TaskForm({ tasks, setTasks }) {

    return (
        <form className="wrapper" onSubmit={e => e.preventDefault()}>
            <input
                placeholder="Add your new todo"
            >
            </input>
            <Button className="add" content="add" />
        </form>
    )
}

export default TaskForm;