import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useTasks } from "../../hooks/useTasks";
import styles from "./styles";

const CompletedTasks = () => {
  const { completedTasks } = useTasks();
  return (
    <SafeAreaView style={styles.completedTasks}>
      <Text style={styles.completedTasksNumber}>{completedTasks}</Text>
      <Text>Completed</Text>
      <Text>Tasks</Text>
    </SafeAreaView>
  );
};

export default CompletedTasks;
