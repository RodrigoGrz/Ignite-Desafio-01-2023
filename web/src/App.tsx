import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
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

export function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if(!newTask.trim()) {
      alert('O campo não pode ser vazio!');
      return;
    }

    const task = {
      id: uuid(),
      task: newTask,
      isCompleted: false,
    }

    setTasks([...tasks, task]);
    setNewTask('');
  }

  return (
    <div>
      <Header />

     
        <form onSubmit={handleCreateNewTask} className={styles.newTask}>
          <Input value={newTask} onChange={(event) => setNewTask(event.target.value)} />
          <Button
            type="submit"
            title="Criar"
            icon={<PlusCircle size={16} weight="bold" color="#fff" />}
          />
        </form>
     

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
