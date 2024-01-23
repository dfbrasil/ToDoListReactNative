import { StyleSheet } from "react-native"
import { theme } from '../../theme/index';

export default StyleSheet.create({
    pendingTasksNumber:{
        fontSize: theme.font_size.pattern,
        fontWeight:'bold',
    },
    pendingTasks:{
        backgroundColor: theme.colors.base.white,
        width: '48%',
        height:90,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    }
})