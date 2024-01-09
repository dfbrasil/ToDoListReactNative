import { SafeAreaView, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import styles from "./styles";

export default () => {
    return (
        <SafeAreaView style={styles.pendingTasksList}>
            <View>
                <Text> Atividade 03 </Text>
                <Text> Description </Text>  
            </View>
            <View style={styles.pendingTasksListIcons}>
                <FontAwesome name="square" color="rgba(0, 0, 0, 0.50)" size={24} />
                <FontAwesome name="trash" color="rgba(0, 0, 0, 0.50)#8a8a" size={24} />
            </View>
        </SafeAreaView>
    )
}