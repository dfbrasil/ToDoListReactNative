import { StyleSheet } from "react-native"
import { theme } from '../../theme/index';
export default StyleSheet.create({
    completedTasksNumber:{
        fontSize:theme.font_size.pattern,
        fontWeight:'bold',
    },
    completedTasks:{
        backgroundColor: theme.colors.base.green,
        width: '48%',
        height: 90,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    }
})