import { SafeAreaView, View, Text } from 'react-native';
import TaskProgressBoard from '../../components/molecules/taskProgressBoard';
import CompletedTasks from '../../components/molecules/completedTasksDashboard';
import PendingTasks from '../../components/molecules/pendingTasksDashboard';

import styles from './styles';

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.dashboardTitle}>Dashboard</Text>
      <TaskProgressBoard />
      <View style={styles.taskStatus}>
        <CompletedTasks num={2}/>
        <PendingTasks  num={1}/>
      </View>
  </SafeAreaView>
  )
}

