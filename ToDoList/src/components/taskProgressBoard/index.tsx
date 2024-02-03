import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useTasks } from "../../hooks/useTasks";
import styles from "./styles";

const TaskProgress = () => {
  const { completedTasks, tasks } = useTasks();

  return (
    <SafeAreaView style={styles.taskProgess}>
      <Text style={styles.taskTitle}>Tasks Progress</Text>
      <Text
        style={styles.taskDone}
      >{`${completedTasks}/${tasks.length} tasks done`}</Text>
    </SafeAreaView>
  );
};

export default TaskProgress;
