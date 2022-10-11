import React, { useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DeviceEventEmitter } from 'react-native'

import ContactList from './scenes/ContactList'
import Contact from './interfaces/Contact'
import ContactDetails from './scenes/ContactDetails'

export type StackParams = {
    Contacts: any
    Details: any
}

const Stack = createNativeStackNavigator<StackParams>()

const App = () => {
    const [constactList, updateContactList] = useState<Contact[]>([
        {
            id: 1,
            name: 'Bernardo',
            email: 'bernardo@mail.com',
            birthDate: '22/01/1998'
        }
    ])

    const updateContact = (contact: Contact) => {
        let index = constactList.findIndex((con) => con.id === contact.id)
        let newArr = [...constactList]
        newArr[index] = contact
        updateContactList(newArr)
    }

    const createContact = (contact: Contact) => {
        let newArr = [...constactList, contact]
        updateContactList(newArr)
    }

    const deleteContact = (id: number) => {
        let index = constactList.findIndex((con) => con.id == id)
        let newArr = [...constactList]
        newArr.splice(index, 1)
        updateContactList(newArr)
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Contacts"
                    component={ContactList}
                    initialParams={{
                        contacts: constactList
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={ContactDetails}
                    initialParams={{ updateContact, createContact, deleteContact }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
