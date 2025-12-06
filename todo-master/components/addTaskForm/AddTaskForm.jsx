"use client";

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const AddTaskForm = (props) => {
    const { setMessage, setTasks } = props;
    const [taskName, setTaskName] = useState("");

    const handleChange = (e) => {
        setMessage(null);
        setTaskName(e.target.value);
    }
    const handleAddTask = () => {
        if (taskName.trim().length == 0) {
            setMessage({
                text: 'The task is null',
                isError: true,
            })
        }
        setTasks((prev) => {
            return [...prev, { id: uuidv4(), name: taskName, isComplete: false }]
        })
        setTaskName("")
        setMessage({
            text: 'Task is added',
            isError: false
        })
    }
    return (
        <div>
            <input type="text" value={taskName} onChange={handleChange} />
            <button onClick={handleAddTask}>Добавить задачу</button>
        </div>
    )
}

export default AddTaskForm;