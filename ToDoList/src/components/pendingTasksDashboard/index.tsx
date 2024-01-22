import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";

interface PendingTasksProps {
  num: number;
}

const PendingTasks = ({num} : PendingTasksProps) => {
  return (
    <SafeAreaView style={styles.pendingTasks}>
      <Text style={styles.pendingTasksNumber}>{num}</Text>
      <Text>Pending</Text>
      <Text>Tasks</Text>
    </SafeAreaView>
  );
};

export default PendingTasks;
