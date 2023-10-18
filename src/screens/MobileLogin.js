import { View, Text, StatusBar, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Auth_Screen_Styles, Splash_Screen_Styles } from '../constants/Styles'

import Feather from 'react-native-vector-icons/Feather';
import BackIcon from 'react-native-vector-icons/AntDesign';

const MobileLogin = ({ navigation }) => {

    return (
        <View style={Auth_Screen_Styles.main_container}>
            <StatusBar animated={true} backgroundColor="#930000" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon name="arrowleft" size={25} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Login</Text>
            </View>

            {/* Body */}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="always">
                <View style={Auth_Screen_Styles.body}>
                    <Image
                        source={require("../assets/images/logo1.png")} style={Auth_Screen_Styles.logo1} />

                    <View style={{...Auth_Screen_Styles.inputContainer}}>
                        <Feather name="lock" size={20} color="#030303" />
                        <TextInput
                            placeholder='CNIC'
                            placeholderTextColor="#A1A5C1"
                            style={Auth_Screen_Styles.input_Text}
                            keyboardType='number-pad'
                        />
                    </View>

                    <View style={Auth_Screen_Styles.inputContainer}>
                        <Feather name="lock" size={20} color="#030303" />
                        <TextInput
                            placeholder='Phone Number'
                            placeholderTextColor="#A1A5C1"
                            style={Auth_Screen_Styles.input_Text}
                            keyboardType='phone-pad'
                        />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("OTPVarification",{register:false})} style={Auth_Screen_Styles.btnContainer}>
                        <Text style={Auth_Screen_Styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default MobileLogin;


const styles = StyleSheet.create({
    header: {
      backgroundColor: '#930000',
      height: 45,
      width: "100%",
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
    //   justifyContent:"center"
    },
    headerTextContainer: {
      justifyContent: 'space-between',
      width: '90%',
      marginLeft: 10,
      flexDirection: 'row'
    },
    headerText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#FFFFFF',
      marginLeft:10,
    //   marginBottom:5
    },
})