import React, { useState, useRef, useEffect } from "react";
import { View, ActivityIndicator, Linking, SafeAreaView, StyleSheet, BackHandler,Text, TouchableOpacity,StatusBar } from 'react-native'

import WebView from "react-native-webview";
import BackIcon from 'react-native-vector-icons/AntDesign';
export default function ProjectsView({ route, navigation }) {
    const items = route.params
    console.log(items.link)

    const [canGoBack, setCanGoBack] = useState(false)
    const [canGoForward, setCanGoForward] = useState(false)
    const [currentUrl, setCurrentUrl] = useState(items.link)

    //  var currentUrl=""
    const webViewRef = useRef()
    const [isLoading, setLoading] = useState(false);

    const handleBackButtonPress = () => {
        // console.log("?????????????????????????",currentUrl)
        // try {
            // webViewRef.current.goBack()
            // if (webViewRef.current) {
            // console.log("in side back handler button" ,webViewRef.current)
            webViewRef.current?.goBack();
            // if(items.link == currentUrl){
            //       return true
            // }
            return true
            //     return true 
            // }
            // return false;
        // } catch (err) {
        //     console.log("[handleBackButtonPress] Error : ", err.message)
        // }
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonPress)
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonPress)
        };
    }, []);

    // console.log("askldjfhjksadfhksadf",currentUrl)
 
    return (
        <View style={{ flex: 1 }}>

            {/* <View style={{backgroundColor:"red",height:100,justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>

                <Text>Go Back</Text>
                </TouchableOpacity>
            </View> */}
            <StatusBar animated={true} backgroundColor="#930000" />
             <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon name="arrowleft" size={30} color="#FFFFFF" />
                </TouchableOpacity>
                {/* <View style={{ justifyContent: 'space-between', width: '90%', marginLeft: 10, flexDirection: 'row' }}>
                  
                </View> */}
            </View>
            <WebView
                originWhiteList={['*']}
                source={{ uri: items.link }}
                style={styles.container}
                ref={webViewRef}
                onLoadStart={(syntheticEvent) => {
                    setLoading(true);
                }}
                allowsBackForwardNavigationGestures
                onShouldStartLoadWithRequest={(event) => {
                    // console.log("event.navigationType", event.navigationType)
                    // console.log("event.navigationType", event)
                   
                    if (event.navigationType === 'other') {
                        
                        if (!event.url.match(/(google\.com\/*)/)) {
                            // Linking.openURL(event.url)
                            // setCurrentUrl(event.url)
                            return true
                        }
                        return true
                    }
                    else {
                        console.log("<<<<<<<<<<")
                        return true;
                    }
                }}
                onLoadEnd={(syntheticEvent) => {
                    setLoading(false);
                }}
            />
            {isLoading && (
                <ActivityIndicator
                    color="#234356"
                    size="large"
                    style={styles.loading}
                />
            )}
            {/* <WebView
                originWhiteList={['*']}
                source={{ uri: items.link }} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#234356'
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 0.06,
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
});