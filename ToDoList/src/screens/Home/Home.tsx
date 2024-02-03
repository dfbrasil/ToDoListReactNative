import { SafeAreaView, Text, TouchableOpacity, ScrollView} from "react-native";
import SearchBar from "../../components/searchBar";
import Task from "../../components/task";
import Title from "../../components/title";
import { useTasks } from "../../hooks/useTasks";
import styles from "./styles";

export default function Home() {
  const { tasks, addNewTask } = useTasks();
  return (
    <SafeAreaView style={styles.container}>
      <Title name="Todo List"/>
      <SearchBar />
      <ScrollView contentContainerStyle={styles.tasksScroll}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          subtitle={task.subtitle}
          active={task.active}
        />
      ))}
    </ScrollView>
    </SafeAreaView>
  );
}
