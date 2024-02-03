import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useTasks } from "../../hooks/useTasks";
import styles from "./styles";

const PendingTasks = () => {
  const { pendingTasks } = useTasks();
  return (
    <SafeAreaView style={styles.pendingTasks}>
      <Text style={styles.pendingTasksNumber}>{pendingTasks}</Text>
      <Text>Pending</Text>
      <Text>Tasks</Text>
    </SafeAreaView>
  );
};

export default PendingTasks;
