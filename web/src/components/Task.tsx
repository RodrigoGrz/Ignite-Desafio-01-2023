import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

export function Task() {
    return (
        <div className={styles.task}>
            <input type="checkbox" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio alias, esse fuga recusandae tempora repellendus, corporis ullam veritatis, culpa voluptatibus ipsum? Inventore, vitae numquam. Iure perferendis quisquam tempora rerum molestiae.</p>
            <div>
                <button title="Deletar tarefa">
                    <Trash size={24} />
                </button>
            </div>
        </div>
    );
}