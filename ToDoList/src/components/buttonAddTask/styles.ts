import { StyleSheet } from "react-native";
import { theme } from '../../theme/index';

export default StyleSheet.create({
    buttonAdd: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.base.green,
        height: 60,
        width: 60, 
        borderRadius: 50,

    },
    iconButton: {
        width: 20,
        height: 20,
    },

})