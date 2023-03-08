import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Trash2 } from "react-native-feather";
import { Task as TaskSchema } from "../../screens/Home";

import { styles } from "./styles";

interface TaskProps {
    task: TaskSchema;
    onDeleteTask: (id: string) => void;
    onToggleComplete: (id: string) => void;
}

export function Task({ task, onDeleteTask, onToggleComplete }: TaskProps) {
    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    function handleToogleComplete() {
        onToggleComplete(task.id);
    }

    return (
        <View style={styles.container}>
            <BouncyCheckbox
                size={17}
                fillColor={task.isCompleted ? '#5E60CE' : '#4EA8DE'}
                text={task.content}
                onPress={handleToogleComplete}
            />
            <Trash2 
                stroke="#808080" 
                width={16} 
                height={16}
                onPress={handleDeleteTask}
            />
        </View>
    );
}