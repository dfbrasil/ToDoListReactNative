import { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Task, { TaskProps } from '../../components/task';
import SearchBar from "../../components/searchBar";
import Title from '../../components/title';

import styles from "./styles";

const Home = () => {
    const [tasksList, setTasksList] = useState<TaskProps[]>([
        {
          id: 1,
          title: 'Comprar leite',
          subtitle: 'Ir ao supermercado e comprar leite',
          active: false,
          onToggle: () => {}, 
        },
        {
          id: 2,
          title: 'Estudar React Native',
          subtitle: 'Ler a documentação e praticar programação',
          active: false,
          onToggle: () => {},
        },
      ]);
    
    const [completedTasks, setCompletedTasks] = useState(0);
    const [pendingTasks, setPendingTasks] = useState(0);

    const updateTaskCount = (isChecked: boolean, task: TaskProps) => {
        setTasksList(prevTasks => {
            if (isChecked) {
                setCompletedTasks(prevCount => prevCount + 1);
                setPendingTasks(prevCount => Math.max(0, prevCount - 1));
            } else {
                setCompletedTasks(prevCount => Math.max(0, prevCount - 1));
                setPendingTasks(prevCount => prevCount + 1);
            }
            return prevTasks.map(t => (t.id === task.id ? { ...t, active: isChecked } : t));
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Title name='Todo List' />
            <SearchBar />
            <ScrollView contentContainerStyle={styles.tasksScroll}>
            {tasksList.map((task) => (
                <Task
                    key={task.id}
                    id={task.id} 
                    title={task.title}
                    subtitle={task.subtitle}
                    active={task.active}
                    onToggle={(isChecked: boolean) => updateTaskCount(isChecked, task)}
                />
            ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
