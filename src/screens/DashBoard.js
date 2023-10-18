import { View, Text, AppState, ScrollView, Image, StatusBar, ImageBackground, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useContext, useCallback, useRef, useState, useEffect } from 'react'
import BellIcon from 'react-native-vector-icons/FontAwesome';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import { Dashboard_Styles } from '../constants/Styles';
import AuthContext from '../Routes/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogoutAPI } from '../Services';
const inactiveTimeInMinute = 10
const millisecToMins = 60000
const DashBoard = ({ route, navigation }) => {
  const appState = useRef(AppState.currentState)
  const [appStateVisibl, setAppStateVisible] = useState(appState.current)
  console.log("appStateVisibl", appStateVisibl)
  // const user = route.params.user
  // // const user = items.user
  // console.log(user)
  // const user = "newUser"
  // const appState = useRef(AppState.currentState);
  // const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [user, setUser] = useState("")
  const windowHeight = Dimensions.get('window').height;
  const { setUserID } = useContext(AuthContext)
  useEffect(() => {
    getCurrentUser()
    const unsubscribe = navigation.addListener('focus', () => {
      getCurrentUser()
    });
    return () => {
      unsubscribe;
    };

  }, []);
  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
      setTimeout(() => {
        Logout()
      }, 900 * 1000);
    });
    return () => {
      subscription.remove();
    };
  }, []);
  // const onAppStateChange = useCallback(
  //   (nextAppState) => {
  //     if (appState.current.match(/inactive|background/)) {
  //       // updateInactivityTime(Date.now())
  //       console.log("updateInactivityTime")
  //     }
  //     if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
  //       const differenceInElapsedTime = Date.now() - 15
  //       console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",differenceInElapsedTime)
  //       const backgroundElapsedTime = Math.floor(differenceInElapsedTime / millisecToMins)
  //       console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",backgroundElapsedTime)
  //       // var ELLAPSED_SECOND = (differenceInElapsedTime % 60000) / 1000 //For testing use second
  //       if (backgroundElapsedTime >= inactiveTimeInMinute) {
  //          console.log("in side If statement")
  //          setTimeout(() => {
  //           Logout()
  //             console.log("in side time out")
  //          }, 100000);
  //       } else {
  //         // resetInactivityTimer()
  //         console.log("in side else statement")

  //       }
  //     }
  //     appState.current = nextAppState
  //     setAppStateVisible(appState.current)
  //   },
  //   [],
  // )

  // useEffect(() => {
  //   AppState.addEventListener('change', onAppStateChange)
  //   return () => {
  //     AppState.removeEventListener('change', onAppStateChange)
  //   }
  // }, [onAppStateChange])

  const getCurrentUser = async () => {
    const tempUser = await AsyncStorage.getItem("registerUser");
    const username = await AsyncStorage.getItem("user_name")
    console.log(">>>>>>>>>>>>>", username)
    if (tempUser !== null) {
      setUser(tempUser);
    }
  }
  console.log(user)
  const Logout = async () => {
    await LogoutAPI().then((res) => {
      console.log("response home ", res)

    }).catch((error) => {
      console.log(error)
      alert(error)
    })
    await AsyncStorage.removeItem("user_id");
    await AsyncStorage.removeItem("registerUser");
    console.log("logout")
    setUserID(null)
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{height:windowHeight-31 }}>
        <StatusBar animated={true} backgroundColor="#000000" />
        <View style={{ width: "100%", height: windowHeight / 3.5 }}>
          <ImageBackground
            source={require("../assets/images/dashboard_image.png")} resizeMode="cover" style={{ width: "100%", height: windowHeight / 3.6 }}>
            <View style={Dashboard_Styles.headerContainer}>
              <TouchableOpacity onPress={()=> navigation.navigate("Drawer")}>

              <Image source={require("../assets/images/nevIcon.png")} style={{ width: 22, height: 25 }} />
              </TouchableOpacity>
              <View style={Dashboard_Styles.SearchView}>
                <TextInput
                  style={Dashboard_Styles.searchInput}
                  placeholder='search'
                />
                <SearchIcon name="search1" size={20} color="#000000" />
              </View>
              <BellIcon name="bell" size={25} color="#FFFFFF" />
              <TouchableOpacity>
                <Image source={require("../assets/images/profileImage.png")} style={{ width: 35, height: 35 }} />
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "flex-end", height: windowHeight / 6.2 }}>
              <View style={Dashboard_Styles.bigBox}>
                <View style={Dashboard_Styles.smallBox}>
                  <Text style={Dashboard_Styles.textHeading}>Our Projects</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("ProjectsView", 
                  // { link: 'https://ajg.aljalildevelopers.com/' }
                  { link: ' https://aljalildevelopers.com/pages/al-jalil-garden-housing-scheme' }
                  )}>
                    <Image source={require("../assets/images/dashboard_log2.png")} style={Dashboard_Styles.logo} resizeMode="contain" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("ProjectsView", 
                  // { link: 'https://abr.aljalildevelopers.com/' }
                  { link: 'https://aljalildevelopers.com/pages/al-bari-residencia' }

                  )}>
                    <Image source={require("../assets/images/dashboard_log1.png")} style={Dashboard_Styles.logo} resizeMode="contain" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                    <Image source={require("../assets/images/dashboard_log3.png")} style={Dashboard_Styles.logo} resizeMode="contain" />
                  </TouchableOpacity>
                 
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{ width: "100%", height: windowHeight / 1.6,marginTop:60  }}>
          {
            user == 'not_register' || user == "" ?
              <View style={Dashboard_Styles.rectangle_mainView}>
                <View style={{ flex: 1, alignItems: "flex-end", marginRight: 25 }}>
                  <TouchableOpacity style={Dashboard_Styles.rectangle_Box} onPress={() => navigation.navigate("MobileLogin")}>
                    <Image source={require("../assets/images/ledger.png")} style={Dashboard_Styles.imageIcon} />
                  </TouchableOpacity>
                  <View style={{ width: "50%", alignItems: "center" }}>
                    <Text style={Dashboard_Styles.BoxText}>Customer</Text>
                    <Text style={Dashboard_Styles.BoxText}>Dashboard</Text>
                  </View>
                </View>
                <View style={{ flex: 1, marginLeft: 25 }}>
                  <TouchableOpacity style={Dashboard_Styles.rectangle_Box} onPress={() => navigation.navigate("Blogs")}>
                    <Image source={require("../assets/images/announcement.png")} style={Dashboard_Styles.imageIcon} />
                  </TouchableOpacity>
                  <View style={{ width: "50%", alignItems: "center" }}>
                    <Text style={Dashboard_Styles.BoxText}>News/Blog</Text>
                    <Text style={Dashboard_Styles.BoxText}></Text>
                  </View>
                </View>
              </View>
              :
              <View style={Dashboard_Styles.rectangle_mainView}>
                <View style={{ flex: 1, alignItems: "flex-end", marginRight: 25 }}>
                  <TouchableOpacity style={Dashboard_Styles.rectangle_Box} onPress={() => navigation.navigate("TransactionLedger")}>
                    <Image source={require("../assets/images/ledger.png")} style={Dashboard_Styles.imageIcon} />
                  </TouchableOpacity>
                  <View style={{ width: "50%", alignItems: "center" }}>
                    <Text style={Dashboard_Styles.BoxText}>Transaction</Text>
                    <Text style={Dashboard_Styles.BoxText}>Ledger</Text>
                  </View>
                </View>
                <View style={{ flex: 1, marginLeft: 25 }}>
                  <TouchableOpacity style={Dashboard_Styles.rectangle_Box} onPress={() => navigation.navigate("History")}>
                    <Image source={require("../assets/images/documents.png")} style={Dashboard_Styles.imageIcon} />
                  </TouchableOpacity>
                  <View style={{ width: "50%", alignItems: "center" }}>
                    <Text style={Dashboard_Styles.BoxText}>Help Desk</Text>
                    <Text style={Dashboard_Styles.BoxText}></Text>
                  </View>
                </View>
              </View>
          }

          <View style={[Dashboard_Styles.rectangle_mainView, { marginTop: 8 }]}>
            <View style={{ flex: 1, alignItems: "flex-end", marginRight: 25 }}>
              <TouchableOpacity style={Dashboard_Styles.rectangle_Box} onPress={() => navigation.navigate("DevelopmentProgress")}>
                <Image source={require("../assets/images/developmentIcon.png")} style={Dashboard_Styles.imageIcon} />
              </TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Text style={Dashboard_Styles.BoxText}>Development</Text>
                <Text style={Dashboard_Styles.BoxText}>Progress</Text>
              </View>
            </View>
            <View style={{ flex: 1, marginLeft: 25 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Documents")} style={Dashboard_Styles.rectangle_Box}>
                <Image source={require("../assets/images/documents.png")} style={Dashboard_Styles.imageIcon} />
              </TouchableOpacity>
              <View style={{ width: "50%", alignItems: "center" }}>
                <Text style={Dashboard_Styles.BoxText}>Documents</Text>
                <Text style={Dashboard_Styles.BoxText}></Text>
              </View>
            </View>
          </View>
          {
            user == 'not_register' || user == "" ?
              <View style={[Dashboard_Styles.rectangle_mainView, { marginTop: 8}]}>
                <View style={{ flex: 1, alignItems: "flex-end", marginRight: 25 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("SOP")} style={Dashboard_Styles.rectangle_Box}>
                    <Image source={require("../assets/images/sopsIcon.png")} style={Dashboard_Styles.imageIcon} />
                  </TouchableOpacity>
                  <View style={{ width: "50%", alignItems: "center" }}>
                    <Text style={Dashboard_Styles.BoxText}>Sop’s</Text>
                    <Text style={Dashboard_Styles.BoxText}></Text>
                  </View>
                </View>
                <View style={{ flex: 1, marginLeft: 25 }}>

                </View>
              </View>
              :
              <View style={[Dashboard_Styles.rectangle_mainView, { marginTop: 8}]}>
                <View style={{ flex: 1, alignItems: "flex-end", marginRight: 25 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("SOP")} style={Dashboard_Styles.rectangle_Box}>
                    <Image source={require("../assets/images/sopsIcon.png")} style={Dashboard_Styles.imageIcon} />
                  </TouchableOpacity>
                  <View style={{ width: "50%", alignItems: "center" }}>
                    <Text style={Dashboard_Styles.BoxText}>Sop’s</Text>
                    <Text style={Dashboard_Styles.BoxText}></Text>
                  </View>
                </View>
                <View style={{ flex: 1, marginLeft: 25 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("Blogs")} style={Dashboard_Styles.rectangle_Box}>
                    <Image source={require("../assets/images/announcement.png")} style={Dashboard_Styles.imageIcon} />
                  </TouchableOpacity>
                  <View style={{ width: "50%", alignItems: "center" }}>
                    <Text style={Dashboard_Styles.BoxText}>News/Blog</Text>
                    <Text style={Dashboard_Styles.BoxText}></Text>
                  </View>
                </View>
              </View>
          }
          <View style={{flex:0.6}}>
            {/* Button */}

            <TouchableOpacity
              onPress={() => navigation.navigate("Help")}
              style={{ backgroundColor: "#930000", width: "60%", alignSelf: "center", borderRadius: 100, height: 35, justifyContent: "center" }}>
              <Text style={{ textAlign: "center", color: "#FFFFFF", fontSize: 12, fontWeight: "700", lineHeight: 14 }}>Hi,How Can i Help?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Bottom Social Icons */}
      <View style={{ backgroundColor: "#000000", width: "100%", alignItems: "center", justifyContent: "center", flexDirection: "row",}}>
        <Image source={require("../assets/images/Vector1.png")} style={{ marginRight: 25,marginTop:5, width: 20, height: 20}} />
        <Image source={require("../assets/images/Vector2.png")} style={{ marginRight: 25,marginTop:5,width: 20, height: 20 }} />
        <SearchIcon name="instagram" size={25} color="#FFFFFF" style={{ marginRight: 25,marginTop:5 }} />
        <Image source={require("../assets/images/Vector5.png")} style={{ marginRight: 25,marginTop:5, width: 20, height: 20 }} />
        <Image source={require("../assets/images/Vector4.png")} style={{ marginRight: 25,marginTop:5, width: 20, height: 20 }} />
      </View>
    </View>
  )
}
export default DashBoard;