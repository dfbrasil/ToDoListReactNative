import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";

interface PendingTasksProps {
  num: number;
}

const PendingTasks = (props : PendingTasksProps) => {
  return (
    <SafeAreaView style={styles.pendingTasks}>
      <Text style={styles.pendingTasksNumber}>{props.num}</Text>
      <Text>Pending</Text>
      <Text>Tasks</Text>
    </SafeAreaView>
  );
};

export default PendingTasks;
