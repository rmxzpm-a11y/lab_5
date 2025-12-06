"use client";
import styles from "./style.module.css"

const Task = (props) => {
    const { handleComplete, handleDelete, task} = props;

    console.log(task);

    return (
        <div key={task.id}>
            <p className={task.isComplete ? styles.checked : ""}>{task.name}</p>
            <input type="checkbox" checked={task.isComplete} onChange={() => { handleComplete(task) }} />
            <button onClick={() => handleDelete(task)}>Удалить</button>
        </div>
    )
}

export default Task;