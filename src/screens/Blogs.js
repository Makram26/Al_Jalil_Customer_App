import { StyleSheet, Text, View, StatusBar, TouchableOpacity,BackHandler,ActivityIndicator,Linking } from 'react-native'
import React,{useRef,useState,useEffect} from 'react'

import BellIcon from 'react-native-vector-icons/FontAwesome';
import BackIcon from 'react-native-vector-icons/AntDesign';
import { Helpdesk_Styles } from '../../constants/Styles'
import WebView from 'react-native-webview';


const Blogs = ({ navigation }) => {

    const webViewRef = useRef()
    const [isLoading, setLoading] = useState(false);


    const handleBackButtonPress = () => {
        try {
            webViewRef.current?.goBack()
            return true
        } catch (err) {
            console.log("[handleBackButtonPress] Error : ", err.message)
        }
    }
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonPress)
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonPress)
        };
    }, []);
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
                        <Text style={styles.headerText}>Blogs</Text>

                    </TouchableOpacity>
                    <BellIcon name="bell" size={20} color="#FFFFFF" />
                </View>
            </View>
            <View style={{ flex: 0.9, }}>
                {/* <WebView source={{ uri: 'https://aljalildevelopers.com/blog' }} /> */}
                <WebView
                    originWhiteList={['*']}
                    source={{ uri: 'https://aljalildevelopers.com/blogs/news' }}
                    style={styles.container}
                    ref={webViewRef}
                    onLoadStart={(syntheticEvent) => {
                        setLoading(true);
                    }}
                    allowsBackForwardNavigationGestures
                    onShouldStartLoadWithRequest={(event) => {
                        console.log(event.navigationType)
                        if (event.navigationType === 'other') {
                           
                            if (!event.url.match(/(google\.com\/*)/)) {
                                // Linking.openURL(event.url)
                                // return false
                                return true
                            }
                            return true
                        }
                        else {
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
                        // color="red"

                        size="large"
                        style={styles.loading}
                    />
                )}
            </View>
        </View>
    )
}

export default Blogs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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