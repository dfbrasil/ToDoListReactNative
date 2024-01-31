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
        position: "relative",
    },
    tasksScroll: {
        gap: 5
    },
})