import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { useTasks } from "../../hooks/useTasks";
import styles from "./styles";

interface TaskProps {
  title: string;
  subtitle: string;
  active: boolean;
  id: number;
}

const Task = ({ title, subtitle, id, active }: TaskProps) => {
  const { removeTask, updateTask } = useTasks();

  const handleCheckboxToggle = () => {
    updateTask({ title, subtitle, active: !active, id });
  };

  return (
    <TouchableOpacity style={active ? styles.active : styles.inactive}>
      <SafeAreaView style={styles.taskContainer}>
        <View style={styles.textTask}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.icons}>
          <CheckBox
            checked={active}
            checkedColor="green"
            onPress={handleCheckboxToggle}
          />
          <TouchableOpacity onPress={() => removeTask(id)}>
            <FontAwesome name="trash" color="rgba(0, 0, 0, 0.50)" size={24} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default Task;
