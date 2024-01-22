import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";

interface CompletedTasksProps {
  num: number;
}

const CompletedTasks = ({num} : CompletedTasksProps) => {
  return (
    <SafeAreaView style={styles.completedTasks}>
      <Text style={styles.completedTasksNumber}>{num}</Text>
      <Text>Completed</Text>
      <Text>Tasks</Text>
    </SafeAreaView>
  );
};

export default CompletedTasks;
