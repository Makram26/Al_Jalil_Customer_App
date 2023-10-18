import React, { useState, useRef, useEffect,useContext } from "react";
import { View, Text, ActivityIndicator, StatusBar, TouchableOpacity, Image, Linking, SafeAreaView, StyleSheet, BackHandler } from 'react-native'
import Phone from 'react-native-vector-icons/FontAwesome';
import BackIcon from 'react-native-vector-icons/AntDesign';
import NavIcon from 'react-native-vector-icons/EvilIcons'
import Location from 'react-native-vector-icons/Ionicons';
import Feedback from 'react-native-vector-icons/MaterialIcons';
import Toggle from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from "react-native-gesture-handler";
import { LogoutAPI } from '../../Services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../Routes/context';



export default function DrawerNav({ navigation }) {
    const { setUserID } = useContext(AuthContext)
    const [isLoading, setLoading] = useState(false);


    const Logout = async () => {
        setLoading(true)
        // await LogoutAPI().then((res) => {
        //     console.log("response home ", res)

        // }).catch((error) => {
        //     console.log(error)
        // setLoading(false)

        //     // alert(error)
        // })
        await AsyncStorage.removeItem("user_id");
        await AsyncStorage.removeItem("registerUser");
        console.log("logout")
        setUserID(null)
        setLoading(false)

    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#ffffff', padding: 6 }}>
            <TouchableOpacity onPress={() => navigation.navigate("DashBoard")}>
                {/* <Image source={require("../../assets/images/nevIcon.png")} style={{ width: 22, height: 25 }} /> */}
                {/* <NavIcon name="navicon" size={35} color={'#000000'} style={{ marginTop: 20 }} /> */}
                <Image source={require("../../assets/images/nevIcon.png")} style={{ width: 22, height: 25, tintColor: "#000000", margin: 20, marginBottom: 5 }} />
            </TouchableOpacity>
            {/* Image */}
            <View style={{ alignItems: 'center', flex: 0.06, }}>
                <View style={{ width: 80, height: 80, borderRadius: 80 / 2, backgroundColor: "#900D10", justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Image source={require('../../assets/images/bell.png')} /> */}
                    <Location name="person" size={50} color={'#ffffff'} />
                </View>
                <Text style={{ fontSize: 24, fontWeight: '600', lineHeight: 24, color: '#1A1E25', marginTop: 15 }}> Ali Warraich </Text>
                <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 16, color: '#7D7F88', marginVertical: 10 }}> aliwarraich08@gmail.com  </Text>
            </View>
            <View style={{ borderColor: '#D6D6D6', borderWidth: 0.6, width: '95%', alignSelf: 'center' }} />

            {/* Profile */}
            <TouchableOpacity style={{ flexDirection: 'row', flex: 0.015, alignItems: 'center', marginTop: 30, marginLeft: 8 }}>
                <View style={{ backgroundColor: '#F5F5F5', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderColor: '#E3E3E7', borderWidth: 0.5 }}>
                    <Location name="person" size={22} color={'#900D10'} />
                </View>
                <Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 16, color: '#1A1E25', marginLeft: 12, }}>My Profile</Text>
            </TouchableOpacity>
            <View style={{ borderColor: '#D6D6D6', borderWidth: 0.6, width: '95%', alignSelf: 'center', marginVertical: 12 }} />

            {/* Contact us */}
            <TouchableOpacity
                onPress={() => navigation.navigate("Contactus")} 
                style={{ flexDirection: 'row', flex: 0.015, alignItems: 'center', marginLeft: 8 }}>
                <View style={{ backgroundColor: '#F5F5F5', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderColor: '#E3E3E7', borderWidth: 0.5 }}>
                    <Location name="settings-sharp" size={22} color={'#900D10'} />
                </View>
                <Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 16, color: '#1A1E25', marginLeft: 12, }}>Contact Us</Text>
            </TouchableOpacity>
            <View style={{ borderColor: '#D6D6D6', borderWidth: 0.6, width: '95%', alignSelf: 'center', marginVertical: 12 }} />

            {/* Feed Back */}
            <TouchableOpacity
                onPress={() => navigation.navigate('Feedback')} 
                style={{ flexDirection: 'row', flex: 0.015, alignItems: 'center', marginLeft: 8 }}>
                <View style={{ backgroundColor: '#F5F5F5', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderColor: '#E3E3E7', borderWidth: 0.5 }}>
                    <Feedback name="feedback" size={20} color={'#900D10'} />
                </View>
                <Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 16, color: '#1A1E25', marginLeft: 12, }}>Feedback</Text>
            </TouchableOpacity>
            <View style={{ borderColor: '#D6D6D6', borderWidth: 0.6, width: '95%', alignSelf: 'center', marginVertical: 12 }} />

            {/* Log Out */}
            <TouchableOpacity onPress={() => Logout()} style={{ flexDirection: 'row', flex: 0.015, alignItems: 'center', marginLeft: 8 }}>
                <View style={{ backgroundColor: '#F5F5F5', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderColor: '#E3E3E7', borderWidth: 0.5 }}>
                    <Toggle name="toggle-switch-off" size={22} color={'#900D10'} />
                </View>
                <Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 16, color: '#1A1E25', marginLeft: 12, }}>Log Out</Text>
            </TouchableOpacity>
            {isLoading && (
                <ActivityIndicator
                    color="#234356"
                    size="large"
                    style={styles.loading}
                />
            )}
        </ScrollView>

    )
}

const styles=StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
})