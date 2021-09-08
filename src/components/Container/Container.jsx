import './Container.css';
import Footer from '../Footer/Footer';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';

function Container() {
    return (
        <div className="container">
            <h1>Todo App</h1>
            <TaskForm />
            <TaskList />
            <Footer />
        </div>
    )
}

export default Container;