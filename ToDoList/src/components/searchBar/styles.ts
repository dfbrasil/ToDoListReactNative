import { StyleSheet } from "react-native";
import { theme } from '../../theme/index';

export default StyleSheet.create({
    searchBarPlaceHolder:{
        color:'#c3c1e5',
        fontSize: theme.font_size.title18,
        fontWeight:'bold',
    },
    searchBar:{
        width:'100%',
        borderRadius:10,
        height:54,
        backgroundColor: theme.colors.base.white,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        padding:10,
    }
})