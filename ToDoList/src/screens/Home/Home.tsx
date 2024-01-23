import { View, SafeAreaView } from 'react-native';
import Task from '../../components/task';
import { useState } from 'react';
import SearchBar from "../../components/searchBar";
import ButtonAddTask from '../../components/buttonAddTask';
import Title from '../../components/title';

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
          <Title name='Todo List'/>
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
        <View style={styles.buttonContainer}>
          <ButtonAddTask />
        </View>
      </SafeAreaView>  
  )
}