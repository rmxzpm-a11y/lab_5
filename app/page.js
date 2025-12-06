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


    return (
        <div>
            <h1>Список задач</h1>

            {
                message ? <p>{message.text}</p> : <></>
            }
            <p>{taskName}</p>

            <AddTaskForm setTasks={setTasks} setMessage={setMessage}   />
            

            <TaskList setMessage={setMessage} setTasks={setTasks} tasks={tasks}  />

        </div>
    );
}
export default Home;
