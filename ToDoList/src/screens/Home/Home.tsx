import { View, SafeAreaView, ScrollView } from 'react-native';
import Task from '../../components/task';
import { useState } from 'react';
import SearchBar from "../../components/searchBar";
import Title from '../../components/title';

import styles from "./styles";

export interface TaskItem {
  id: number,
  title: string,
  subtitle: string,
} 

const tasksList: TaskItem[] = [


];

export default function Home() {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);

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
        <ScrollView contentContainerStyle={styles.tasksScroll}>
          {tasksList.map((task, index) => (
          <Task 
          key={index}
            title={task.title}
            subtitle={task.subtitle}
            active={false}
            onToggle={updateTaskCount}
            />
          ))}
        </ScrollView>
      </SafeAreaView>  
  )
}