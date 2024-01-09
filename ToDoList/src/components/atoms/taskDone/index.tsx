
import { SafeAreaView, Text } from "react-native"
import style from "./style"


export default () =>{
    return (
        <SafeAreaView>
            <Text style={style.taskDone}> 1/3 task done </Text>
        </SafeAreaView>
    )
}