import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { useTasks } from '../../hooks/useTasks';
import Title from '../../components/title';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function NewTask() {
  const navigation = useNavigation();
  const { addNewTask } = useTasks();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const handleAddTask = () => {
    if (title && subtitle) {
      addNewTask({ title, subtitle });
      setTitle('');
      setSubtitle('');
      navigation.navigate('Home' as never);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Title name='New Task' />
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
        <TouchableOpacity style={styles.customButtom} onPress={handleAddTask}>
          <Text style={styles.textButton}>Create</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
