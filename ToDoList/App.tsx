import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import TaskProgressBoard from './src/components/taskProgressBoard';
import CompletedTasks from './src/components/completedTasksDashboard';
import PendingTasks from './src/components/pendingTasksDashboard';
import SearchBar from './src/components/searchBar';
import Task from './src/components/task';
import Title from './src/components/title';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='inverted' />
      <Title name="Dashboard" />
      <TaskProgressBoard numDone={1} totalTasks={2}/>
      <View style={styles.taskStatus}>
        <CompletedTasks num={1}/>
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
