import styles from "./Task.module.css";
import { Trash, Check } from "phosphor-react";
import { Task as TaskSchema } from "../App";

interface TaskProps {
    task: TaskSchema;
    onDeleteTask: (id: string) => void;
}

export function Task({ task, onDeleteTask }: TaskProps) {
    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    return (
        <div className={task.isCompleted ? styles.taskChecked : styles.task}>
            <div className={styles.checkbox}>
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