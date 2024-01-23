import { SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import TaskProgress from '../../components/taskProgressBoard';
import Task from '../../components/task';
import { useState } from 'react';
import SearchBar from "../../components/searchBar";


import styles from "./styles";

const tasksList = [
  { title: 'Treino', subtitle: 'Braços' },
  { title: 'Festa', subtitle: 'Carnaval' },
  { title: 'Treino', subtitle: 'Pernas' },
];

export default function Home() {
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
          <Text style={styles.homeTitle}>Todo List</Text>
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
  )
}