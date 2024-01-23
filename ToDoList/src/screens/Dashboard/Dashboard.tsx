import { SafeAreaView, View, Text } from 'react-native';
import CompletedTasks from '../../components/completedTasksDashboard';
import PendingTasks from '../../components/pendingTasksDashboard';
import TaskProgress from '../../components/taskProgressBoard';
import { completedTasks, pendingTasks } from '../Home/Home'
import styles from './styles';


export default function Dashboard() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.dashboardTitle}>Dashboard</Text>
      <TaskProgress />
      <View style={styles.taskStatus}>
        <CompletedTasks num={completedTasks}/>
        <PendingTasks num={pendingTasks}/>
      </View>
    </SafeAreaView>
  )
}

