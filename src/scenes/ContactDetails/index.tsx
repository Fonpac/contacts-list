import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { StackParams } from '../../App'
import Contact from '../../interfaces/Contact'
import style from './style'
import { DeviceEventEmitter } from 'react-native'

const ContactDetails = ({ navigation, route }: NativeStackScreenProps<StackParams, 'Details'>) => {
    const contact = route.params!.contact
        ? route.params!.contact
        : {
              name: '',
              birthDate: '',
              email: ''
          }

    const [newContact, setNewContact] = useState<Contact>(contact)

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
                            route.params!.updateContact(newContact)
                        } else {
                            route.params!.createContact(newContact)
                        }
                        navigation.pop()
                    }}
                >
                    <Text style={style.buttonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[style.button, { backgroundColor: 'red' }]}
                    onPress={() => {
                        if (route.params!.contact) {
                            route.params!.deleteContact(newContact.id)
                        }

                        navigation.pop()
                    }}
                >
                    <Text style={style.buttonText}>{route.params!.contact ? 'Excluir' : 'Cancelar'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ContactDetails
