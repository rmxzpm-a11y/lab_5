"use client"

import styles from "./styles.module.css"
import Task from "./task/Task";

const TaskList = (props) => {
    const { setTasks, setMessage, tasks} = props;
    const handleComplete = (task) => {
        setTasks((prev) => {
            return prev.map((el) => {
                if (el.id === task.id) return { ...task, isComplete: !task.isComplete }
                return el;
            })
        })
    }

    const handleDelete = (task) => {
        setTasks((prev) => {
            return prev.filter((el) => {
                return el.id !== task.id;
            })
        })

        setMessage({
            text: 'Task is deleted',
            isError: true,
        })
    }

    return (
        <>
            {
                tasks.map((task) => (
                    <Task key={task.id} handleDelete={handleDelete} handleComplete={handleComplete} task={task} />
                ))
            }
        </>
    );
}


export default TaskList;
