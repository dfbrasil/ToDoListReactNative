import { Text, SafeAreaView, StyleSheet } from "react-native"
import styles from "./styles"

interface TitleProps {
    name: string;
    fontSize?: number; 
}

const Title = ({name, fontSize}: TitleProps) => {
    return(
        <SafeAreaView>
            <Text style={[styles.dashboardTitle, {fontSize}]}> {name} </Text>
        </SafeAreaView>
    )
}

export default Title;
