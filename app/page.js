"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import TaskList from "@/components/TaskskList";
import AddTaskForm from "@/components/addTaskForm/AddTaskForm";

const initialTasks = [
    {
        id: uuidv4(),
        name: "Изучить основы React",
        isComplete: true,
    },
    {
        id: uuidv4(),
        name: "Изучить основы State",
        isComplete: true,
    },
    {
        id: uuidv4(),
        name: "Изучить способы создания многостраничного приложения SPA",
        isComplete: false,
    },
]

const Home = () => {
    const [taskName, setTaskName] = useState("");
    const [tasks, setTasks] = useState(initialTasks);
    const [message, setMessage] = useState(null);
    
    const completedCount = tasks.filter(t => t.isComplete).length;

    return (
        <div className="container">
            <h1>Список задач</h1>
            
            <div className="task-counter">
                📊 Завершено: {completedCount} из {tasks.length}
            </div>

            {message && (
                <div className={`message ${message.type === 'success' ? 'success' : 'error'}`}>
                    {message.text}
                </div>
            )}
            
            {taskName && (
                <div className="task-preview">
                    📝 Новая задача: <strong>{taskName}</strong>
                </div>
            )}

            <AddTaskForm setTasks={setTasks} setMessage={setMessage} />
            
            {tasks.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-state-icon">📋</div>
                    <h3>Задач пока нет</h3>
                    <p>Добавьте первую задачу выше</p>
                </div>
            ) : (
                <TaskList setMessage={setMessage} setTasks={setTasks} tasks={tasks} />
            )}
        </div>
    );
}
export default Home;
