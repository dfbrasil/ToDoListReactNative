import { StyleSheet } from "react-native";
import { theme } from '../../theme/index';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.background.bgpattern,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 27,
        gap:12,
    },
    content: {
        marginTop: 50,
    },
    backContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputContent: {
        justifyContent: "space-between",
        height: 150,
        width: '80%',
        marginLeft: 8
    },
    input: {
        width: '100%',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 8, 
        paddingHorizontal: 10, 
        paddingVertical: 15, 
        marginBottom: 12, 
    },
    customButtom: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 44,
        borderWidth: 2,
        borderColor: theme.colors.base.green,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    textButton: {
        color: theme.colors.base.green,
        fontWeight: 'bold',
    },
  }
)