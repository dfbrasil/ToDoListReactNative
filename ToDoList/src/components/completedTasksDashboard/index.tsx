import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";

interface CompletedTasksProps {
  num: number;
}

const CompletedTasks = (props : CompletedTasksProps) => {
  return (
    <SafeAreaView style={styles.completedTasks}>
      <Text style={styles.completedTasksNumber}>{props.num}</Text>
      <Text>Completed</Text>
      <Text>Tasks</Text>
    </SafeAreaView>
  );
};

export default CompletedTasks;
