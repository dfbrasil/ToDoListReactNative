import { SafeAreaView, Text } from "react-native";

import styles from "./styles";
import CompletedTasksNumber from "../../atoms/completedTasksNumber";

interface CompletedTasksProps {
    num: number
}

export default (props:CompletedTasksProps) => {
    return (
        <SafeAreaView style={styles.completedTasks}>
            <CompletedTasksNumber num={1}/>
            <Text>Completed</Text>
            <Text>Tasks</Text>
        </SafeAreaView>
    )
}