import { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../types/types';
import { Feather } from '@expo/vector-icons';
import Title from '../../components/title';
import styles from './styles';
import { theme } from '../../theme';

type BottomTabNavigation = BottomTabNavigationProp<TabParamList, 'NewTask'>;

interface NewTaskProps {
  navigation: BottomTabNavigation;
}

interface TaskItem {
  id: number;
  title: string;
  subtitle: string;
}

export default function NewTask({ navigation }: NewTaskProps) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const addTask = () => {
    if (title && subtitle) {
      const newTask: TaskItem = {
        id: tasks.length + 1,
        title: title,
        subtitle: subtitle,
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setTitle('');
      setSubtitle('');

      navigation.navigate('Home', { tasks: updatedTasks });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.backContent} onPress={handleGoBack}>
          <Feather name="arrow-left" size={26} color="white" />
          <Text style={{ color: 'white', fontSize: theme.font_size.pattern14 }}>Voltar</Text>
        </TouchableOpacity>
        <Title name="New Task" />
      </View>
      <View style={styles.inputContent}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={subtitle}
          onChangeText={setSubtitle}
        />
        <TouchableOpacity style={styles.customButtom} onPress={addTask}>
          <Text style={styles.textButton}>Create</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
