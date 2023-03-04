import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
    return (
        <input {...rest} className={styles.input} type="text" placeholder="Adicione uma nova tarefa" />
    );
}