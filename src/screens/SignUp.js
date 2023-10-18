import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Dimensions,
    FlatList,
    Alert,
    ImageBackground,
} from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Auth_Screen_Styles, Splash_Screen_Styles } from '../constants/Styles'


// import { Icon } from 'react-native-elements';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { format } from 'date-fns';
var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendesday",
    "Thursday",
    "Friday",
    "Saturday"
];
export default function SignUp({ navigation }) {
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [dob, setDob] = useState("Date of Birth")
    const [residence, setResidence] = useState("")
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [emailErrorMsg, setEmailErrorMsg] = useState("")


    // ======================== get Date calendar ======================= 

    let today = new Date().toLocaleDateString()
    const [todaydate, setTodayDate] = useState(new Date(today));
    let selectdate = new Date(today)
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [currentDay, setCurrentDay] = useState(days[new Date(todaydate).getDay()])

    const getUserEmail = (value) => {
        setEmail(value)
        setEmailErrorMsg("")
    }


    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const onChange = (event, selectedDate) => {
        setShow(false);
        // console.log(">>>>>>>>>>",selectedDate.toLocaleDateString())
        //     // setTaskData([])
        //     const result = format(selectedDate, 'dd-MM-yyyy')

        //    console.log(result)
        if (event.type === "dismissed") {
            setDob("Date of Birth")
        }
        else {
            setDob(format(selectedDate, 'dd/MM/yyyy'))
        }
        // selectdate = selectedDate
        const currentDate = selectedDate;
        // setCurrentDay(days[new Date(currentDate).getDay()])
        setTodayDate(currentDate)
        // checkPermissions2()
    };

    const PublicUserRegistration = async () => {

        // if (EMAIL_REGEX.test(email) === false) {
        //     setEmailErrorMsg("Please Enter a Valid  Email")
        //     return true
        // }

        navigation.goBack()




    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always" contentContainerStyle={{ backgroundColor: '#FFFFFF', flexGrow: 1, }}>

            {/* Header */}
            <View style={{ flex: 0.1 }}>
                <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()} >
                    <Image style={{ margin: 18 }} source={require("../assets/images/back1.png")} />
                </TouchableOpacity>
            </View>

            {/* body */}
            <View style={{ flex: 0.3, backgroundColor: '#FFFFFF', marginBottom: 10, }}>
                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <Text style={styles.titleText}>Create your </Text>
                    <Text style={[styles.titleText, { fontWeight: 'bold' }]}>account</Text>
                </View>
                <Text style={styles.subTitleText}>Enter the Detail here</Text>
                <Image
                    style={{ width: 90, height: 98, alignItems: 'center', marginTop: 20, justifyContent: 'center', alignSelf: 'center' }}
                    source={require("../assets/images/logo1.png")} />
            </View>

            {/* Form */}
            <View style={{ flex: 0.5, marginHorizontal: 20 }}>
                <View style={styles.inputTextContainer}>
                    <Ionicons name='person' size={12} color={'#252B5C'} />
                    <TextInput
                        style={{ width: "95%", marginLeft: 5, }}
                        keyboardType={'default'}
                        value={name}
                        placeholder='Name'
                        placeholderTextColor="#A1A5C1"
                        onChangeText={(text) => setName(text)} />
                </View>
                <View style={styles.inputTextContainer}>
                    <Ionicons name='mail' size={12} color={'#252B5C'} />
                    <TextInput
                        style={{ width: "95%", marginLeft: 5 }}
                        keyboardType={'email-address'}
                        value={email}
                        placeholder='Email'
                        placeholderTextColor="#A1A5C1"
                        onChangeText={(text) => getUserEmail(text)} />
                </View>
                <Text style={{ color: "red", marginTop: 0, fontSize: 12, marginLeft: 3 }}>{emailErrorMsg != "" ? emailErrorMsg : ""}</Text>
                <View style={styles.inputTextContainer}>
                    <Icon1 name='phone' size={12} color={'#252B5C'} />
                    <TextInput
                        style={{ width: "95%", marginLeft: 5 }}
                        keyboardType={'phone-pad'}
                        value={phoneNo}
                        placeholder='Phone No.'
                        placeholderTextColor="#A1A5C1"
                        onChangeText={(text) => setPhoneNo(text)} />
                </View>








                <TouchableOpacity onPress={() => showDatepicker()} style={styles.inputTextContainer}>

                    <Icon2 name='date-range' size={15} color={'#252B5C'} />
                    <Text style={{ width: "95%", marginLeft: 5, paddingTop: 15, paddingBottom: 15 }}>{dob}</Text>

                </TouchableOpacity>
                {/* if change the color of picker header and text color then follow the below line of code
                android/app/src/main/res/values/styles.xml
                add below to line code in desired location 
                <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
                    <item name="android:datePickerDialogTheme">@style/DialogDatePicker.Theme</item>
                </style>

                <style name="DialogDatePicker.Theme" parent="Theme.AppCompat.Light.Dialog">
                    <item name="colorAccent">@color/ocean_green</item>
                    <item name="android:textColor">@color/dove_gray</item>
                    <item name="android:textColorPrimary">@color/dove_gray</item>
                </style>
                colorAccent is the color of header of picker and selector
                textColor is the color of numbers and text buttons
                textColorPrimary is the color of text of month. */}
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={todaydate}
                        textColor="red"
                        mode={mode}
                        dateFormat="day month dayofweek"

                        onChange={onChange}
                    />
                )}
                <View style={styles.inputTextContainer}>
                    <Icon3 name='map-marker' size={12} color={'#252B5C'} />
                    <TextInput
                        style={{ width: "95%", marginLeft: 5 }}
                        keyboardType={'default'}
                        value={residence}
                        placeholder='Area of Residence'
                        placeholderTextColor="#A1A5C1"
                        onChangeText={(text) => setResidence(text)} />
                </View>
                <View style={styles.inputTextContainer}>
                    <Ionicons name='lock-closed' size={12} color={'#252B5C'} />
                    <TextInput
                        style={{ width: "95%", marginLeft: 5 }}
                        keyboardType={'visible-password'}
                        value={password}
                        placeholder='Password'
                        placeholderTextColor="#A1A5C1"
                        onChangeText={(text) => setPassword(text)} />
                </View>
                <View style={styles.inputTextContainer}>
                    <Ionicons name='lock-closed' size={12} color={'#252B5C'} />
                    <TextInput
                        style={{ width: "95%", marginLeft: 5 }}
                        keyboardType={'visible-password'}
                        value={confirmPassword}
                        placeholder='Confirm Password'
                        placeholderTextColor="#A1A5C1"
                        onChangeText={(text) => setConfirmPassword(text)} />
                </View>
                <TouchableOpacity style={Auth_Screen_Styles.showpasswordContainer} onPress={()=> navigation.navigate("TermsCondition")} >
                    <Text style={{ fontSize: 14, fontWeight: "600", lineHeight: 20, color: "#930000",marginTop:10 }}>Terms and Conditions</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => PublicUserRegistration()}
                // onPress={() => navigation.navigate("OTPVarification", { register: true })}
                style={styles.btnRegister}>
                <Text style={styles.btnRegisterText}>Register</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff"
    },

    btnBack: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F5F4F8',
        margin: 20
    },
    titleText: {
        fontSize: 25,
        fontWeight: "500",
        color: '#000000'
    },
    subTitleText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#000000',
        marginLeft: 20,
    },

    inputTextContainer: {
        flexDirection: 'row',
        padding: 7,
        paddingHorizontal: 10,
        backgroundColor: '#F5F4F8',
        borderRadius: 10,
        marginVertical: 6,
        alignItems: 'center'
    },
    btnRegister: {
        flex: 0.1,
        width: "80%",
        height: 60,
        backgroundColor: '#930000',
        borderRadius: 10,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    btnRegisterText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    }
})