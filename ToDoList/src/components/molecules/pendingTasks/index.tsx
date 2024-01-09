import { SafeAreaView, Text } from "react-native";

import styles from "./styles";
import PendingTasksNumber from "../../atoms/pendingTasksNumber";

interface PendingoTasksProps{
    num: number
}

export default (props:PendingoTasksProps) => {
    return (
        <SafeAreaView style={styles.pendingTasks}>
            <PendingTasksNumber num={2} />
            <Text>Pending</Text>
            <Text>Tasks</Text>
        </SafeAreaView>
    )
}