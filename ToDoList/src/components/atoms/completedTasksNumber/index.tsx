import { SafeAreaView, Text } from "react-native";

import styles from "./styles";

interface CompletedTaskNumberProps{
    num: number
}

export default (props:CompletedTaskNumberProps) => {

    const num = 3

    return (
        <SafeAreaView>
            <Text style={styles.completedTasksNumber}> 
                {props.num}
            </Text>
        </SafeAreaView>
    )
}