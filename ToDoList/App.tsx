import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Dashboard from './src/components/atoms/title';
import TaskProgressBoard from './src/components/molecules/taskProgressBoard';
import CompletedTasks from './src/components/molecules/completedTasksDashboard';
import PendingTasks from './src/components/molecules/pendingTasksDashboard';
import SearchBar from './src/components/molecules/searchBar';
import Task from './src/components/molecules/task';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='inverted' />
      <Dashboard />
      <TaskProgressBoard />
      <View style={styles.taskStatus}>
        <CompletedTasks num={3}/>
        <PendingTasks num={2}/>
      </View>
      <SearchBar />
      <Task title="Treino" subtitle="Subtítulo" active={false} />
      <Task title="Festa" subtitle="Subtítulo" active={true} />
      <Task title="Ensaio" subtitle="Subtítulo" active={true} />
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
      gap:11,
    }
});
