import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StatusBar, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView, BackHandler, Alert } from 'react-native'
import { Auth_Screen_Styles, Splash_Screen_Styles } from '../constants/Styles'
import Feather from 'react-native-vector-icons/Feather';
import MailBox from 'react-native-vector-icons/Fontisto';
import BackArrow from 'react-native-vector-icons/AntDesign';
import { login, storeData } from '../Services';
import Spinner from 'react-native-loading-spinner-overlay';
import AuthContext from '../Routes/context';
const Login = ({ navigation }) => {
  const { setUserID } = useContext(AuthContext)
  const [oldsecureTextEntry, setOldSecureTextEntry] = useState(false)
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [emailErrorMsg, setEmailErrorMsg] = useState("")
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("")
  const [loading, setLoading] = useState(false)
  const updateOldSecureTextEntry = () => {
    console.log(oldsecureTextEntry)
    setOldSecureTextEntry(!oldsecureTextEntry);
  }
  const getUserIdValue = (value) => {
    setUserId(value)
    setEmailErrorMsg("")
  }
  const getPasswordValue = (value) => {
    setPassword(value)
    setPasswordErrorMsg("")
  }
  const submitHandler = async () => {
    storeData(574, "123", "test@gmail.com", "not_register")
    // setUser(sessionID);
    setUserID(574)
    // console.log("email", EMAIL_REGEX.test(userId))
    // if (userId === "") {
    //   setEmailErrorMsg("Please Enter Your Email")
    //   return true
    // }
    // if (EMAIL_REGEX.test(userId) === false) {
    //   setEmailErrorMsg("Please Enter a Valid  Email")
    //   return true
    // }
    // if (password === "") {
    //   setPasswordErrorMsg("Please Enter Your Password")
    //   return true
    // }
    // if (userId != "" && password != "") {
    //   setLoading(true)
    //   let response = await login(userId.trim(), password.trim())
    //   console.log("res", response);

    //   try {
    //     if (response.result != undefined) {
    //       storeData(response.result.uid, password, userId, "not_register")
    //      // setUser(sessionID);
    //       setUserID(response.result.uid)
    //       setLoading(false)
    //       // navigation.navigate("AppNavigator")
    //     }
    //     else if(response.error.data.message == "already_logged_in"){
    //      setLoading(false)
    //      console.log(">>>>>>>>>>",response.error.data.message)
    //      alert("User already logged in. Log out from other devices and try again.")
    //     }
    //     else {
    //       setLoading(false)
    //       alert("Username and password do not match!")
    //     }
    //   } catch (error) {
    //     setLoading(false)
    //     console.log("error", error)
    //   }
    // }
  }
  // useEffect(() => {
  //   const backAction = () => {
  //     BackHandler.exitApp()
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonPress)
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonPress)
    };
  }, []);


  const handleBackButtonPress = () => {

    try {
      BackHandler.exitApp()
      return true
    } catch (err) {
      console.log("[handleBackButtonPress] Error : ", err.message)
    }
  }
  return (
    <View style={Auth_Screen_Styles.main_container}>
      {
        loading ?
          <Spinner visible={true} />
          :
          null
      }
      <StatusBar animated={true} backgroundColor="#000000" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="always">
        <View style={Auth_Screen_Styles.header}>
          <ImageBackground source={require("../assets/images/login_header.png")} resizeMode="cover" style={Auth_Screen_Styles.bg}>
            {/* <TouchableOpacity style={Auth_Screen_Styles.BackBtn}>
              <BackArrow name="left" size={20} color="#030303" />
            </TouchableOpacity> */}
          </ImageBackground>
        </View>
        <View style={Auth_Screen_Styles.body}>
          <Image
            source={require("../assets/images/logo3.png")} style={Auth_Screen_Styles.logo1}
          />
          <Text style={Auth_Screen_Styles.heading}>Let's Sign In</Text>
          <View style={Auth_Screen_Styles.inputContainer}>
            <TextInput
              placeholder='Enter Your Email'
              placeholderTextColor="#A1A5C1"
              style={Auth_Screen_Styles.input_Text}
              value={userId}
              onChangeText={(val) => getUserIdValue(val)}
            />
            <MailBox name="email" size={20} color="#030303" />
          </View>
          {console.log(emailErrorMsg)}
          <Text style={{ color: "red", marginTop: 5, fontSize: 10, marginLeft: 3 }}>{emailErrorMsg != "" ? emailErrorMsg : ""}</Text>
          <View style={Auth_Screen_Styles.inputContainer}>
            <TextInput
              placeholder='Enter Your Password'
              placeholderTextColor="#A1A5C1"
              style={Auth_Screen_Styles.input_Text}
              // keyboardType="numeric"
              secureTextEntry={oldsecureTextEntry ? false : true}
              value={password}
              onChangeText={(val) => getPasswordValue(val)}
            />
            <TouchableOpacity onPress={updateOldSecureTextEntry}>

              {
                oldsecureTextEntry ?
                  <Feather name="eye" size={20} color="#030303" />
                  :
                  <Feather name="eye-off" size={20} color="#030303" />
              }
            </TouchableOpacity>
          </View>
          <Text style={{ color: "red", marginTop: 5, fontSize: 10, marginLeft: 3 }}>{passwordErrorMsg != "" ? passwordErrorMsg : ""}</Text>
          <TouchableOpacity style={Auth_Screen_Styles.showpasswordContainer} >
            <Text style={{ fontSize: 14, fontWeight: "600", lineHeight: 20, color: "#930000" }}>Forget Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => submitHandler()} style={Auth_Screen_Styles.btnContainer}>
            <Text style={Auth_Screen_Styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={Auth_Screen_Styles.footer}>
          <Text style={Auth_Screen_Styles.footerText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "#930000", fontSize: 18, fontWeight: "700" }}> Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
export default Login
