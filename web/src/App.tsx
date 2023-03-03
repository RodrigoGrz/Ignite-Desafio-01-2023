import { useState } from "react";
import "./global.css";
import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import clipboardImg from "./assets/clipboard.png";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Task } from "./components/Task";

interface Task {
  id: string;
  task: string;
  isCompleted: boolean;
}

const tasks = [
  {
    id: 'test1',
    task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false,
  },
  {
    id: 'test2',
    task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false,
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.newTask}>
        <Input />
        <Button 
          title="Criar"
          icon={<PlusCircle size={16} weight="bold" color="#fff" />}
        />
      </div>

      <div className={styles.tasksContainer}>
        <div className={styles.tasksContent}>
          <div className={styles.tasksHeader}>
            <div className={styles.infoTasks}>
              <span>Tarefas criadas</span>
              <span>{tasks ? tasks.length : 0}</span>
            </div>
            <div className={styles.tasksDones}>
              <span>Concluídas</span>
              <span>0</span>
            </div>
          </div>

          {tasks ? tasks.map(task => {
            return (
              <Task 
                key={task.id}
                content={task.task}
                isCompleted={task.isCompleted}
              />
            )
          }) : (
            <img src={clipboardImg} />
          )}
        </div>
      </div>
    </div>
  )
}
