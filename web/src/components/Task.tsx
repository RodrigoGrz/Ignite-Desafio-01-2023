import styles from "./Task.module.css";
import { Trash, Check } from "phosphor-react";
import { Task as TaskSchema } from "../App";

interface TaskProps {
    task: TaskSchema;
    onDeleteTask: (id: string) => void;
    onToggleComplete: (id: string) => void;
}

export function Task({ task, onDeleteTask, onToggleComplete }: TaskProps) {
    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    function handleToggleTask() {
        onToggleComplete(task.id);
    }

    return (
        <div className={task.isCompleted ? styles.taskChecked : styles.task}>
            <div onClick={handleToggleTask} className={styles.checkbox}>
                <input type="checkbox" />
                <label className={styles.checked}><Check size={12} weight="bold" color="#fff" /></label>
            </div>
            <p className={task.isCompleted ? styles.taskContentChecked : styles.taskContent}>
                {task.content}
            </p>
            <div>
                <button onClick={handleDeleteTask} title="Deletar tarefa">
                    <Trash size={20} />
                </button>
            </div>
        </div>
    );
}