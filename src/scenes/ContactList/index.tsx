import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { SafeAreaView, FlatList, DeviceEventEmitter, TouchableOpacity, Text } from 'react-native'
import { StackParams } from '../../App'
import ContactTile from '../../components/ContactTile'
import Contact from '../../interfaces/Contact'
import styles from './style'

const renderContact = (item: Contact) => <ContactTile contact={item} />

const ContactList = ({ navigation, route }: NativeStackScreenProps<StackParams, 'Contacts'>) => {
    DeviceEventEmitter.addListener('goToDetails', (eventData) => {
        navigation.navigate('Details', { contact: eventData.contact })
    })
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'green' }]}
                onPress={() => {
                    navigation.navigate('Details', { contact: null })
                }}
            >
                <Text style={styles.buttonText}>Novo contato</Text>
            </TouchableOpacity>
            <FlatList data={route.params!.contacts} renderItem={({ item }) => renderContact(item)} />
        </SafeAreaView>
    )
}

export default ContactList
