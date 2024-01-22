import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import styles from "./styles";

export default function PendingTasksList() {
    return (
        <SafeAreaView style={styles.pendingTasksList}>
            <View>
                <Text> Atividade 01 </Text>
                <Text> Descrição </Text>  
            </View>
            <View style={styles.pendingTasksListIcons}>
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