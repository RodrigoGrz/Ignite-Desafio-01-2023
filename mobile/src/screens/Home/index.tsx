import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, FlatList, Alert } from "react-native";
import { PlusCircle } from "react-native-feather";
import uuid from "react-native-uuid";

import { EmptyTask } from "../../components/EmptyTask";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";

import { styles } from "./styles";

export interface Task {
    id: string;
    content: string;
    isCompleted: boolean;
  }

export function Home() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);
    const [tasksDone, setTasksDone] = useState(0);

    function toggleComplete(id: string) {
        const taskToggleComplete = tasks.find(task => task.id === id);
        const allTasksWithoutModified = tasks.filter(task => task.id !== id);
        
        if(!taskToggleComplete) {
          return;
        }
    
        taskToggleComplete.isCompleted = taskToggleComplete.isCompleted === true ? false : true;
    
        setTasks([...allTasksWithoutModified, taskToggleComplete]);
    
        const amountTasksCompleted = tasks.reduce((acc, valueTask) => {
          if(valueTask.isCompleted === true) {
            return Number(acc = acc + 1);
          }
    
          return acc;
        }, 0);
    
        setTasksDone(amountTasksCompleted);
    }
    
    function deleteTask(id: string) {
        const taskThatWillBeDelete = tasks.find(task => task.id === id);

        if(taskThatWillBeDelete?.isCompleted) {
            setTasksDone(prevState => prevState - 1);
        }

        const taskWithoutDeleted = tasks.filter(task => task.id !== id);

        setTasks(taskWithoutDeleted);
    }

    function handleCreateNewTask() {
        if(!newTask) {
            return Alert.alert("Campo Vazio", "Você precisa preencher o campo de tarefa para poder adicionar alguma coisa.");
        }

        const task = {
            id: String(uuid.v4()),
            content: newTask,
            isCompleted: false,
        }

        setTasks(prevState => [...prevState, task]);
        setNewTask('');
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.newTask}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={text => setNewTask(text)}
                    value={newTask}
                />
                <TouchableOpacity style={styles.button} onPress={handleCreateNewTask}>
                    <PlusCircle fontSize={18} stroke="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.tasksContainer}>
                <View style={styles.tasksHeader}>
                    <View style={styles.taskCreated}>
                        <Text style={styles.textTaskCreated}>Criadas</Text>
                        <Text style={styles.amountTaskCreated}>{tasks.length}</Text> 
                    </View>
                    <View style={styles.taskDone}>
                        <Text style={styles.textTaskDone}>Concluídas</Text>
                        <Text style={styles.amountTaskDone}>
                            {tasksDone}
                        </Text>
                    </View>
                </View>

            </View>

            <View style={{ marginTop: 48, alignItems: 'center' }}>
                <FlatList 
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Task 
                            task={item}
                            onDeleteTask={deleteTask}
                            onToggleComplete={toggleComplete}
                        />
                    )}
                    ListEmptyComponent={<EmptyTask />}
                />
            </View>
        </View>
    );
} 