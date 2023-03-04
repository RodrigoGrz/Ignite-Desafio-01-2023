import { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    icon?: ReactNode;
}

export function Button({ title, icon, ...rest }: ButtonProps) {
    return (
        <button {...rest} className={styles.button}>
            {title}
            {icon ? icon : null}
        </button>
    );
}