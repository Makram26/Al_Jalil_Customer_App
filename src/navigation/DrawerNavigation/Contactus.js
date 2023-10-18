import React, { useState, useRef, useEffect } from "react";
import { View, Text, ActivityIndicator, StatusBar, TouchableOpacity,Image, Linking, SafeAreaView, StyleSheet, BackHandler } from 'react-native'
import Phone from 'react-native-vector-icons/FontAwesome';
import BackIcon from 'react-native-vector-icons/AntDesign';
import Location from 'react-native-vector-icons/Ionicons';


export default function Contactus({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor:'#F5F5F5'}}>
            <StatusBar animated={true} backgroundColor="#930000" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon name="arrowleft" size={25} color="#FFFFFF" />
                </TouchableOpacity>
                <View style={{ justifyContent: 'space-between', width: '90%', marginLeft: 10, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.headerText}>Contact Us</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* body */}
            <View style={{ flex: 0.9, width:'90%', alignItems:'center', alignSelf:'center' }}>

                {/* Image */}
                <Image 
                source={require("../../assets/images/digital.png")}
                style={{flex: 0.5, width: "90%" }}/>

                {/* location */}
                <View style={{flex: 0.06, flexDirection: "row", width:'100%', alignItems:'center' }}>
                    <Location name="location-sharp" size={25} color={"#900D10"} />
                    <Text style={{fontSize: 16, fontWeight: '400', lineHeight: 19, color:'#000000', marginLeft: 10}}>6th Avenue, Wall Street, New York</Text>
                </View>
                <View style={{borderWidth: 0.6, borderColor: "#D6D6D6", marginVertical: 10, width:'100%',}} />

                {/* Email */}
                <View style={{flex: 0.06, flexDirection: "row", width:'100%', alignItems:'center' }}>
                    <Location name="ios-mail" size={25} color={"#900D10"} />
                    <Text style={{fontSize: 16, fontWeight: '400', lineHeight: 19, color:'#000000', marginLeft: 10}}>aljalildevelopers@gmail.com</Text>
                </View>
                <View style={{borderWidth: 0.6, borderColor: "#D6D6D6", marginVertical: 10, width:'100%',}} />

                {/* Contact Number */}
                <View style={{flex: 0.06, flexDirection: "row", width:'100%', alignItems:'center' }}>
                    <Phone name="phone" size={25} color={"#900D10"} />
                    <Text style={{fontSize: 16, fontWeight: '400', lineHeight: 19, color:'#000000', marginLeft: 15}}>048-216-4143</Text>
                </View>
                <View style={{borderWidth: 0.6, borderColor: "#D6D6D6", marginVertical: 10, width:'100%',}} />

                {/* Button */}
                <View style={{flex: 0.32, width: "90%", justifyContent: 'flex-end', marginBottom: 20}}>
                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    style={{backgroundColor:'#930000', width: "100%", justifyContent: 'center', alignItems:'center', padding: 15, borderRadius: 10}}>
                        <Text style={{fontSize: 15, fontWeight: '500', lineHeight: 22, color: '#ffffff'}}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5'
    },
    header: {
        flex: 0.1,
        backgroundColor: '#930000',
        // height: 70,
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

})