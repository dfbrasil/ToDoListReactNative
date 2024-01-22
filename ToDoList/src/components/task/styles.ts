import { StyleSheet } from "react-native"

export default StyleSheet.create({
    active: {
        flexDirection: 'row',
        backgroundColor: '#67B588',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 60,
        paddingRight: 60,
        borderRadius: 10,
        margin: 2,
    },
    inactive: {
        flexDirection: 'row',
        backgroundColor: '#FFFCF7',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 60,
        paddingRight: 60,
        borderRadius: 10,
        margin: 2
    },
    text: {
        marginRight: 50,
        justifyContent: 'center'
    },
    icons: {
        flexDirection: 'row',
        marginLeft: 50,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 12,
        color: '#000000',
        opacity: 0.5,
        fontWeight: 'bold'
    }
})