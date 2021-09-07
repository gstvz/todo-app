import './Container.css';
import Footer from '../Footer/Footer';
import TaskInput from '../TaskInput/TaskInput';
import TaskList from '../TaskList/TaskList';

function Container() {
    return (
        <div className="container">
            <h1>Todo App</h1>
            <TaskInput />
            <TaskList />
            <Footer />
        </div>
    )
}

export default Container;