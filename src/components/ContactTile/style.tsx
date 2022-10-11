import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    contact: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        display: 'flex',
        width: '100%',
        flexDirection: 'row'
    },
    icon: {
        borderRadius: 30,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    initial: {
        color: '#000',
        fontWeight: '400',
        fontSize: 22
    },
    name: {
        marginLeft: 20,
        fontSize: 20,
        color: '#fff'
    }
})
