import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    title: string;
    icon?: ReactNode;
}

export function Button({ title, icon }: ButtonProps) {
    return (
        <button className={styles.button}>
            {title}
            {icon ? icon : null}
        </button>
    );
}