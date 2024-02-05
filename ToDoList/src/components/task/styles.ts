import { StyleSheet } from "react-native"
import { theme } from '../../theme/index';

export default StyleSheet.create({
    active: {
        flexDirection: 'row',
        backgroundColor: theme.colors.base.completedTask,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 10,
        margin: 2,
    },
    inactive: {
        flexDirection: 'row',
        backgroundColor: theme.colors.base.white,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 10,
        margin: 2
    },
    taskContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    textTask: {
        marginRight: 'auto',
        maxWidth: '50%',
        justifyContent: 'center',
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
    },
    title: {
        fontSize: theme.font_size.title18,
        color: theme.colors.base.black,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: theme.font_size.subtitle,
        color: theme.colors.base.black,
        opacity: 0.3,
        fontWeight: 'bold'
    }
})