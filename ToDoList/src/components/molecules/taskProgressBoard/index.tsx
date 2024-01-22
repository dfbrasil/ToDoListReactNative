import { SafeAreaView, View } from "react-native";

import styles from "./styles";
import SubTitle from "../../atoms/subTitle";
import TaskDone from "../../atoms/taskDone";

export default () => {
    return (
        <SafeAreaView style={styles.containerTaskProgress}>
            <View style={styles.taskProgess}>
                <SubTitle />
                <TaskDone />
            </View>
        </SafeAreaView>
    )
}
