import { SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import SearchBar from "../../components/molecules/searchBar";
import CompletedTasksList from "../../components/molecules/completedTasksList";
import PendingTasksList from '../../components/molecules/pendingTasksList';

import styles from "./styles";

export default function Home() {
  return (
      <SafeAreaView style={styles.container}>
          <Text style={styles.homeTitle}>Todo List</Text>
          <SearchBar />
          <PendingTasksList />
          <PendingTasksList />
          <PendingTasksList />
          <CompletedTasksList />
          <CompletedTasksList />
          <CompletedTasksList />
      </SafeAreaView>  
  )
}