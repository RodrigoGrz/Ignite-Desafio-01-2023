import logoImg from "../assets/logo.svg";
import styles from "./Header.module.css";

export function Header() {
    return (
        <div className={styles.container}>
            <img src={logoImg} alt="logo tipo to-do" />
        </div>
    );
}