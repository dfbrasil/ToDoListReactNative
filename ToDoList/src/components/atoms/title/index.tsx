import { Text, SafeAreaView, StyleSheet } from "react-native"
import styles from "./styles"

export default (props:any) => {
    return(
        <SafeAreaView>
            <Text style={styles.dashboardTitle}> Dashboard </Text>
        </SafeAreaView>
    )
}
