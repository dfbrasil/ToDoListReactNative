import { StyleSheet } from "react-native"

export default StyleSheet.create({
    completedTasksList:{
        backgroundColor:'#67B588',
        width: '100%',
        height:80,
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
    },
    completedTasksListIcons:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:10,
        gap:20
    }
})