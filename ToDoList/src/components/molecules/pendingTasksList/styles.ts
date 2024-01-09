import { StyleSheet } from "react-native"

export default StyleSheet.create({
    pendingTasksList:{
        backgroundColor:'#fff',
        width: '100%',
        height:80,
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
    },
    pendingTasksListIcons:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:10,
        gap:20
    }
})