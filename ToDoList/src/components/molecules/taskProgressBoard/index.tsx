import { SafeAreaView } from "react-native";

import styles from "./styles";
import SubTitle from "../../atoms/subTitle";
import TaskDone from "../../atoms/taskDone";

export default () => {
    return (
        <SafeAreaView style={styles.taskProgess}>
            <SubTitle />
            <TaskDone />
        </SafeAreaView>
    )
}
