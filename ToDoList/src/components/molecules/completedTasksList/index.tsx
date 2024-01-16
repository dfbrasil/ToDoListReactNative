import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import styles from "./styles";

export default function CompletedTasksList() {
    return (
        <SafeAreaView style={styles.completedTasksList}>
            <View>
                <Text> Atividade 03 </Text>
                <Text> Descrição </Text>  
            </View>
            <View style={styles.completedTasksListIcons}>
                <TouchableOpacity>
                    <FontAwesome name="square" color="rgba(0, 0, 0, 0.50)" size={24} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="trash" color="rgba(0, 0, 0, 0.50)" size={24} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}