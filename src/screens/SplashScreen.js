import { Animated, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions,StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Splash_Screen_Styles } from '../constants/Styles'







const SplashScreen = ({navigation}) => {


  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;




  const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0]
  const [showImage, setShowImage] = useState(true)
  const fadeInOpacity = useState(new Animated.Value(0))[0];
  const fadeOutOpacity = useState(new Animated.Value(1))[0];




  useEffect(() => {
    movelogo()
    setTimeout(() => {
      ChangeImage()
    }, 2000);
  })
  function movelogo() {
    Animated.timing(value, {
      toValue: { x: 0, y: -210 },
      duration: 1300,
      useNativeDriver: false
    }).start()
  }
  const ChangeImage = () => {
    Animated.timing(fadeInOpacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false
    }).start();
    Animated.timing(fadeOutOpacity, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true
    }).start();
    GotoAuthSection()
  }


  const GotoAuthSection=()=>{
    setTimeout(() => {
      navigation.navigate("Login")
    }, 3000);
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar animated={true} backgroundColor="#000000" />
      <Animated.View style={{ width: windowWidth, height: windowHeight, opacity: fadeOutOpacity }}>
        <ImageBackground style={styles.image} source={require("../assets/images/bg1.png")} resizeMode="cover" >
          <Animated.View style={[value.getLayout(), { marginBottom: -150 }]}>
            <Image source={require("../assets/images/logo.png")} style={{ width: windowWidth / 3.5, height: windowHeight / 6 }} />
          </Animated.View>
        </ImageBackground>
      </Animated.View>
      <Animated.View style={{ width: windowWidth, height: windowHeight, opacity: fadeInOpacity, position: "absolute" }}>
        <ImageBackground style={styles.image} source={require("../assets/images/bg2.png")} resizeMode="cover" >
          <Animated.View style={[value.getLayout(), { marginBottom: -150 }]}>
            <Image source={require("../assets/images/logo.png")} style={{ width: windowWidth / 3.5, height: windowHeight / 6 }} />
          </Animated.View>
        </ImageBackground>
      </Animated.View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({

  overlayView: {

    height: "100%",
    width: "100%",
    position: 'absolute',
    backgroundColor: 'rgba(165, 19, 6, 0.9)',
    opacity: 0.6

  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
})