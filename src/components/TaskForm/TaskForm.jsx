import React, { useState } from 'react';
import './TaskForm.css';
import Button from '../Button/Button';

function TaskForm({ tasks, setTasks }) {

    const [input, setInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault(); 
        
        const task = {
            id: Math.floor(Math.random() * 100) + 1,
            text: input
        };
        const newTasks = [...tasks, task];
        console.log(newTasks);

        setTasks(newTasks);
        setInput('');
    }

    return (
        <form className="wrapper" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add your new todo"
                value={input}   
                onChange={e => setInput(e.target.value)}             
            >
            </input>
            <Button className="add" content="add" />
        </form>
    )
}

export default TaskForm;