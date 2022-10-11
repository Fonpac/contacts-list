import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#18181a',
        alignItems: 'center'
    },
    iconContainer: {
        padding: 20
    },
    icon: {
        borderRadius: 100,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    initial: {
        color: 'white',
        fontWeight: '400',
        fontSize: 72
    },
    form: {
        marginTop: 20,
        width: '100%',
        padding: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'white',
        color: 'white'
    },
    button: {
        margin: 10,
        backgroundColor: '#305080',
        height: 48,
        borderRadius: 10
    },
    buttonText: {
        padding: 15,
        height: '100%',
        color: '#f0f0f0',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
