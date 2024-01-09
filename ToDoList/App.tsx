import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Dashboard from './src/components/atoms/title';
import TaskProgressBoard from './src/components/molecules/taskProgressBoard';
import CompletedTasks from './src/components/molecules/completedTasks';
import PendingTasks from './src/components/molecules/pendingTasks';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='inverted' />
      <Dashboard />
      <TaskProgressBoard />
      <View style={styles.taskStatus}>
        <CompletedTasks />
        <PendingTasks />
      </View>
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
