import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import TaskProgressBoard from './src/components/taskProgressBoard';
import CompletedTasks from './src/components/completedTasksDashboard';
import PendingTasks from './src/components/pendingTasksDashboard';
import SearchBar from './src/components/searchBar';
import Task from './src/components/task';
import Title from './src/components/title';
import { useState } from 'react';

const tasksList = [
  { title: 'Treino', subtitle: 'Braços' },
  { title: 'Festa', subtitle: 'Carnaval' },
  { title: 'Treino', subtitle: 'Pernas' },
];

export default function App() {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(tasksList.length);

  const updateTaskCount = (isChecked: boolean) => {
    if (isChecked) {
      setCompletedTasks((prevCount) => prevCount + 1);
      setPendingTasks((prevCount) => Math.max(0, prevCount - 1)); 
    } else {
      setCompletedTasks((prevCount) => Math.max(0, prevCount - 1));
      setPendingTasks((prevCount) => prevCount + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='inverted' />
      <Title name="Dashboard" fontSize={28}/>
      <TaskProgressBoard numDone={completedTasks} totalTasks={completedTasks + pendingTasks}/>
      <View style={styles.taskStatus}>
        <CompletedTasks num={completedTasks}/>
        <PendingTasks num={pendingTasks}/>
      </View>
      <SearchBar />
      {tasksList.map((task, index) => (
        <Task
          key={index}
          title={task.title}
          subtitle={task.subtitle}
          active={false}
          onToggle={updateTaskCount}
        />
      ))}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141325',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 27,
    gap:12
  },
    taskStatus:{
      flexDirection:'row',
      gap:14,
    }
});
