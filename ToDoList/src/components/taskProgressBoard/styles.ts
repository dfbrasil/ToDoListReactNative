import { StyleSheet } from "react-native"

export default StyleSheet.create({
    taskTitle:{
        fontSize:26,
        color: '#000',
        fontWeight:'bold',
    },
    taskDone:{
        fontSize: 12,
        color: '#000'
    },
    taskProgess:{
        backgroundColor:'#fff',
        width: '100%',
        height:100,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'flex-start',
        padding:30
    }
})