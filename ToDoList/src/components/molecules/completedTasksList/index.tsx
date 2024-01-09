import { SafeAreaView, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import styles from "./styles";

export default () => {
    return (
        <SafeAreaView style={styles.completedTasksList}>
            <View>
                <Text> Atividade 03 </Text>
                <Text> Description </Text>  
            </View>
            <View style={styles.completedTasksListIcons}>
                <FontAwesome name="square" color="rgba(0, 0, 0, 0.50)" size={24} />
                <FontAwesome name="trash" color="rgba(0, 0, 0, 0.50)" size={24} />
            </View>
        </SafeAreaView>
    )
}