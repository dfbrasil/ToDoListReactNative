import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";

interface TaskProgressProps {
  numDone: number;
  totalTasks: number;
}

const TaskProgress = ({numDone, totalTasks} : TaskProgressProps) => {
    return (
        <SafeAreaView style={styles.taskProgess}>
        <Text style={styles.taskTitle}>Tasks Progress</Text>
        <Text style={styles.taskDone}>{`${numDone}/${totalTasks} tasks done`}</Text>
        </SafeAreaView>
    );
};

export default TaskProgress;
