import { SafeAreaView, View } from 'react-native';
import CompletedTasks from '../../components/completedTasksDashboard';
import PendingTasks from '../../components/pendingTasksDashboard';
import TaskProgress from '../../components/taskProgressBoard';
import { completedTasks, pendingTasks } from '../Home/Home'
import styles from './styles';
import Title from '../../components/title';


export default function Dashboard() {

  return (
    <SafeAreaView style={styles.container}>
      <Title name='Dashboard' />
      <TaskProgress />
      <View style={styles.taskStatus}>
        <CompletedTasks num={completedTasks}/>
        <PendingTasks num={pendingTasks}/>
      </View>
    </SafeAreaView>
  )
}

