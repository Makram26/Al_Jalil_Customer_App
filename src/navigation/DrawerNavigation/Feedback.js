import React, { useState, useRef, useEffect } from "react";
import { View, Text, ActivityIndicator, StatusBar, TouchableOpacity, Linking, SafeAreaView, StyleSheet, BackHandler,ScrollView } from 'react-native'
import Phone from 'react-native-vector-icons/FontAwesome';
import BackIcon from 'react-native-vector-icons/AntDesign';
import Location from 'react-native-vector-icons/Ionicons';
import { TextInput } from "react-native-gesture-handler";


export default function Feedback({ navigation }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <View style={{ flex: 1 }}>
            <StatusBar animated={true} backgroundColor="#930000" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon name="arrowleft" size={25} color="#FFFFFF" />
                </TouchableOpacity>
                <View style={{ justifyContent: 'space-between', width: '90%', marginLeft: 10, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.headerText}>Feedback</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Body */}
            <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle ={{ flexGrow: 1 }}>
                <View style={styles.inputStyles}>
                    <Location name='person' size={20} color={"#930000"}  />
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="#A1A5C1"
                        value={name}
                        style={{ marginLeft: 5,width :"93%" }}
                        keyboardType="default"
                        onChangeText={(text) => setName(text)}
                    />
                </View>

                

                <View style={styles.inputStyles}>
                    <Location name='mail' size={20} color={"#930000"} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#A1A5C1"
                        value={email}
                        style={{ marginLeft: 5,width :"93%"}}
                        keyboardType="default"
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View style={styles.inputStyles}>
                    <TextInput
                        placeholder="Your Message"
                        placeholderTextColor="#A1A5C1"
                        numberOfLines={8}
                        multiline
                        textAlignVertical='top'
                        value={message}
                        style={{ marginLeft: 5, width: '93%' }}
                        keyboardType="default"
                        onChangeText={(text) => setMessage(text)}
                    />
                </View>

                  
                  <View style={{flex:1,justifyContent:"flex-end",marginBottom:20,marginTop:30}}>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.btnSyles}>
                        <Text style={{ fontSize: 15, fontWeight: '500', lineHeight: 22, color: '#ffffff',padding:14 }}> Submit </Text>
                    </TouchableOpacity>
                  </View>
                
             

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5'
    },
    header: {
        // flex: 0.1,
        backgroundColor: '#930000',
        height: 71,
        width: "100%",
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#234356'
    },
    inputStyles: {
        width:"92%",
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf:"center",
        borderRadius: 5,
        backgroundColor: "#fffffe",
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginTop: 35,
        elevation: 10
    },
    btnSyles:{
        backgroundColor: '#930000', 
        width: "93%", 
        justifyContent: 'center', 
        alignItems: 'center',  
        alignSelf:"center",
        borderRadius: 10 
    }   

})