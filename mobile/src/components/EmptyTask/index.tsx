import { View, Image, Text } from "react-native";

import clipBoard from "../../assets/clipboard.png";

import { styles } from "./styles";

export function EmptyTask() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={clipBoard}
            />
            <Text style={styles.strongText}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.normalText}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    );
}