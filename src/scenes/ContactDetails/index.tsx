import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { StackParams } from '../../App'
import Contact from '../../interfaces/Contact'
import style from './style'
import { DeviceEventEmitter } from 'react-native'

const ContactDetails = ({ navigation, route }: NativeStackScreenProps<StackParams, 'Details'>) => {
    let contactList = route.params!.contacts as Contact[]
    const contact = route.params!.contact
        ? route.params!.contact
        : {
              id: contactList.length > 0 ? contactList[contactList.length - 1].id + 1 : 1,
              name: '',
              birthDate: '',
              email: '',
              phoneNumber: ''
          }

    const [newContact, setNewContact] = useState<Contact>(contact)

    const updateContact = (contact: Contact) => {
        let index = contactList.findIndex((con) => con.id === contact.id)
        if (index >= 0) {
            let newArr = [...contactList]
            newArr[index] = contact
            contactList = newArr as Contact[]
        }
    }

    const createContact = (contact: Contact) => {
        let newArr = [...contactList, contact]
        contactList = newArr as Contact[]
    }

    const deleteContact = (id: number) => {
        let index = contactList.findIndex((con) => con.id == id)
        if (index >= 0) {
            let newArr = [...contactList]
            newArr.splice(index, 1)
            contactList = newArr as Contact[]
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.iconContainer}>
                <View style={style.icon}>
                    <Text style={style.initial}>{newContact.name[0]}</Text>
                </View>
            </View>
            <View style={style.form}>
                <TextInput
                    placeholder="name"
                    placeholderTextColor="white"
                    style={style.input}
                    onChangeText={(value) => {
                        setNewContact({ ...newContact, name: value })
                    }}
                    value={newContact.name}
                />
                <TextInput
                    placeholder="phone number"
                    placeholderTextColor="white"
                    style={style.input}
                    onChangeText={(value) => {
                        setNewContact({ ...newContact, phoneNumber: value })
                    }}
                    value={newContact.phoneNumber}
                />
                <TextInput
                    keyboardType="email-address"
                    placeholder="email"
                    placeholderTextColor="white"
                    style={style.input}
                    onChangeText={(value) => {
                        setNewContact({ ...newContact, email: value })
                    }}
                    value={newContact.email}
                />
                <TextInput
                    placeholder="birth date"
                    placeholderTextColor="white"
                    style={style.input}
                    onChangeText={(value) => {
                        setNewContact({ ...newContact, birthDate: value })
                    }}
                    value={newContact.birthDate}
                />

                <TouchableOpacity
                    style={[style.button, { backgroundColor: 'green' }]}
                    onPress={() => {
                        if (route.params!.contact) {
                            updateContact(newContact)
                        } else {
                            createContact(newContact)
                        }
                        navigation.replace('Contacts', { contacts: contactList })
                    }}
                >
                    <Text style={style.buttonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[style.button, { backgroundColor: 'red' }]}
                    onPress={() => {
                        if (route.params!.contact) {
                            deleteContact(newContact.id)
                        }

                        navigation.replace('Contacts', { contacts: contactList })
                    }}
                >
                    <Text style={style.buttonText}>{route.params!.contact ? 'Excluir' : 'Cancelar'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ContactDetails
