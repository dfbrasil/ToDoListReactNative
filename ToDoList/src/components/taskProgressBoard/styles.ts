import { StyleSheet } from "react-native"
import { theme } from '../../theme/index';

export default StyleSheet.create({

    taskTitle:{
        fontSize: theme.font_size.title18,
        color: theme.colors.base.black,
        fontWeight:'bold',
    },
    taskDone:{
        fontSize: theme.font_size.subtitle,
        color: theme.colors.base.black,
    },

    taskProgess:{
        backgroundColor:theme.colors.base.white,
        height:100,
        width: '100%',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'flex-start',
        padding:30
    }
})