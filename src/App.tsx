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
    const constactList = [
        {
            id: 1,
            name: 'Bernardo',
            email: 'bernardo@mail.com',
            birthDate: '22/01/1998',
            phoneNumber: '51994307295'
        }
    ]

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
                <Stack.Screen name="Details" component={ContactDetails} initialParams={{ contacts: constactList }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
