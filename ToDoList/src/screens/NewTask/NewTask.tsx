import { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Title from '../../components/title';
import { Feather } from '@expo/vector-icons';
import { TabParamList } from '../../types/types';

import styles from './styles';
import { theme } from '../../theme';

type BottomTabNavigation = BottomTabNavigationProp<TabParamList, 'NewTask'>;

interface NewTaskProps {
  navigation: BottomTabNavigation;
}

export default function NewTask({ navigation }: NewTaskProps) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSaveTask = () => {;
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity  style={styles.backContent} onPress={handleGoBack}>
          <Feather name="arrow-left" size={26} color="white" />
          <Text style={{color: 'white', fontSize: theme.font_size.pattern14}}>Voltar</Text>
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
        <TouchableOpacity style={styles.customButtom} onPress={handleSaveTask}>
          <Text style={styles.textButton}>Create</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
