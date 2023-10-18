import { View, Text, ScrollView, Image, StatusBar, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import BellIcon from 'react-native-vector-icons/FontAwesome';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import { Dashboard_Styles } from '../constants/Styles';
export default function Home({ navigation }){
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#FFFFFF" }}>
            <StatusBar animated={true} backgroundColor="#03435A" />
        </ScrollView>
    )
}
