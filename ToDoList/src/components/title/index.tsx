import { Text, SafeAreaView } from "react-native"
import styles from "./styles"

interface TitleProps {
    name: string; 
}

const Title = ({name}: TitleProps) => {
    return(
        <SafeAreaView>
            <Text style={[styles.dashboardTitle,]}> {name} </Text>
        </SafeAreaView>
    )
}

export default Title;
