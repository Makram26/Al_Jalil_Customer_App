import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    TextInput,
    FlatList,
    Alert,
    ImageBackground,
} from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function OTPVarification({ route, navigation }) {
    // console.log("?>???????????",route.params.register)
    const login = async () => {
       
        if (route.params.register) {
            navigation.navigate("Login")
        }
        else {
            await AsyncStorage.setItem('registerUser', "register_user")
            navigation.navigate("DashBoard")
        }
    }
    console.log(">>>>>",windowHeight/20)
    console.log(">>>>>",windowWidth/8)

    return (
        // <View style={{flex:1,backgroundColor:"red"}}>
            <ScrollView contentContainerStyle={{flexGrow:1,backgroundColor:"#ffffff"  }}>

                {/* Header */}
                <View style={{width:windowWidth,height:windowHeight/18}}>
                    <TouchableOpacity  onPress={() => navigation.goBack()} >
                        <Image style={{ margin: 18,width:windowWidth/45,height:windowHeight/45 }} source={require("../assets/images/back1.png")} />
                    </TouchableOpacity>
                </View>

                {/* Logo */}
                <View style={{alignItems: 'center',marginTop:3 }}>
                    <Image
                        style={{ width: windowWidth/4, height: windowHeight/7 }}
                        source={require("../assets/images/logo1.png")} />
                </View>

                {/* Image */}
                <View >
                    <Image
                        style={{ width:windowWidth/1.6,height:windowHeight/3,marginTop:windowWidth/35,marginBottom:windowWidth/35, alignItems: 'center',justifyContent: 'center', alignSelf: 'center' }}
                        source={require("../assets/images/illustration.png")} />
                </View>

                {/* Varification Container */}
                <View style={{ justifyContent: 'center', alignItems: 'center', width: windowWidth,height:windowHeight/2.4, alignSelf: 'center',marginTop:windowWidth/35 }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', color: '#000000', lineHeight: 21.6, textTransform: 'uppercase' }}>OTP Verification</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                        <Text style={{ fontSize: 14, fontWeight: "400", color: '#4E4D4D', lineHeight: 16.8 }}>Enter the OTP sent to - </Text>
                        <Text style={{ fontSize: 14, fontWeight: "600", color: '#000000', lineHeight: 16.8 }}>+92-3029513962</Text>
                    </View>

                    {/* Box */}
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flex: 0.2, width: 58, height: 58, backgroundColor: '#F6F6F6', borderRadius: 10, margin: 10, elevation: 3, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#000000', lineHeight: 22.6 }}>2</Text>
                        </View>
                        <View style={{ flex: 0.2, width: 58, height: 58, backgroundColor: '#F6F6F6', borderRadius: 10, margin: 10, elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#000000', lineHeight: 22.6 }}>2</Text>
                        </View>
                        <View style={{ flex: 0.2, width: 58, height: 58, backgroundColor: '#F6F6F6', borderRadius: 10, margin: 10, elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#000000', lineHeight: 22.6 }}>2</Text>
                        </View>
                        <View style={{ flex: 0.2, width: 58, height: 58, backgroundColor: '#F6F6F6', borderRadius: 10, margin: 10, elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#000000', lineHeight: 22.6 }}>2</Text>
                        </View>
                    </View>

                    {/* Time Counter */}
                    <Text style={{ fontSize: 14, fontWeight: '500', color: '#464646', lineHeight: 16.8, marginTop: 7 }}>00:120 Sec</Text>

                    {/* Re-Send text */}
                    <View style={{ flexDirection: 'row', marginVertical: 15, alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontWeight: "400", color: '#5A5A5A', lineHeight: 16.8 }}>Didn't receive code ? </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 14, fontWeight: "600", color: '#000000', lineHeight: 16.8 }}>Re-send</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Button */}
                    <TouchableOpacity
                        onPress={() => login()}
                        style={{ backgroundColor: '#930000', borderRadius: 10, height: 63, width: "70%", margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '700', color: '#ffffff', lineHeight: 19.2 }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        // </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff"
    },

    btnBack: {
        width: windowWidth/10,
        height: windowHeight/20,
        borderRadius: 100,
        backgroundColor: '#F5F4F8',
        // margin: 20,
        // marginBottom: 15,
    },
})