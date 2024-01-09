import { SafeAreaView, Text } from "react-native";

import styles from "./styles";

interface PendingTaskNumberProps{
    num: number
}

export default (props:PendingTaskNumberProps) => {

    const num = 2

    return (
        <SafeAreaView >
            <Text style={styles.pendingTasksNumber}>
                {props.num}
            </Text>
        </SafeAreaView>
    )
}