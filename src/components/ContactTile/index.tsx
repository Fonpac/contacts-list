import React, { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RandomColor } from '../../Utils'
import { StackActions } from '@react-navigation/native'
import style from './style'
import Contact from '../../interfaces/Contact'
import { DeviceEventEmitter } from 'react-native'

interface ContactTileProps {
    contact: Contact
}

const ContactTile: FC<ContactTileProps> = ({ contact }) => {
    return (
        <TouchableOpacity onPress={() => DeviceEventEmitter.emit('goToDetails', { contact })}>
            <View style={style.contact}>
                <View style={[style.icon, { backgroundColor: RandomColor() }]}>
                    <Text style={style.initial}>{contact.name[0]}</Text>
                </View>
                <View>
                    <Text style={style.name}>{contact.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ContactTile
