import styles from "./Task.module.css";
import { Trash, Check } from "phosphor-react";

interface TaskProps {
    content: string;
    isCompleted: boolean;
}

export function Task({ content, isCompleted }: TaskProps) {
    return (
        <div className={isCompleted ? styles.taskChecked : styles.task}>
            <div className={styles.checkbox}>
                <input type="checkbox" />
                <label className={styles.checked}><Check size={12} weight="bold" color="#fff" /></label>
            </div>
            <p className={isCompleted ? styles.taskContentChecked : styles.taskContent}>
                {content}
            </p>
            <div>
                <button title="Deletar tarefa">
                    <Trash size={20} />
                </button>
            </div>
        </div>
    );
}