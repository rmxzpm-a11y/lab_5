"use client";

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const AddTaskForm = ({ setMessage, setTasks }) => {
    const [taskName, setTaskName] = useState("");

    const handleChange = (e) => {
        setMessage(null);           
        setTaskName(e.target.value);
    };

    const handleAddTask = () => {
        const trimmed = taskName.trim();

        if (trimmed.length === 0) {
            setMessage({
                text: 'The task need to have a name',
                isError: true,
            });
            return;                         
        }

        setTasks(prev => [
            ...prev,
            { id: uuidv4(), name: trimmed, isComplete: false }
        ]);

        setTaskName("");                    
        setMessage({
            text: 'The task is added',
            isError: false
        });
    };

    return (
        <div>
            <input
                type="text"
                value={taskName}
                onChange={handleChange}
                placeholder="Что нужно сделать?"
            />
            <button type="button" onClick={handleAddTask}>
                Добавить задачу
            </button>
        </div>
    );
};

export default AddTaskForm;