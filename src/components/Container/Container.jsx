import React, { useState } from 'react';
import './Container.css';
import Footer from '../Footer/Footer';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';

function Container() {

    const [tasks, setTasks] = useState([]);

    return (
        <div className="container">
            <h1>Todo App</h1>
            <TaskForm tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} />
            <Footer tasks={tasks} />
        </div>
    )
}

export default Container;