import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    Alert,
    ImageBackground,
    ScrollView,
    TextInput,
    StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import BackIcon from 'react-native-vector-icons/AntDesign';
import BellIcon from 'react-native-vector-icons/FontAwesome'

export default function Menu({ navigation }) {

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
                        <Text style={styles.headerText}>AL-NOOR ORCHARD</Text>
                    </TouchableOpacity>
                    <BellIcon name="bell" size={20} color="#FFFFFF" />
                </View>
            </View>

            {/* body */}
            <View style={{ flex: 0.9, width: '90%', alignSelf: 'center', marginTop: 20 }}>
                <TouchableOpacity
                    style={styles.imageView}
                    onPress={() => navigation.navigate("ProjectsView",
                    //  { link: 'https://wm.aljalildevelopers.com/' }
                    { link: 'https://aljalildevelopers.com/pages/west-marina' }
                     
                     )}>
                    <Image
                        style={{ alignSelf: 'center', width: 210, height: 109 }}
                        source={require("../../assets/images/marina.png")} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{...styles.imageView}}
                    onPress={() => navigation.navigate("ProjectsView", 
                    // { link: 'https://wme.aljalildevelopers.com/' }
                    { link: 'https://aljalildevelopers.com/pages/west-marina-executive' }
                    
                    )}>
                    <Image
                        style={{ alignSelf: 'center', width: 210, height: 109 }}
                        source={require("../../assets/images/marinaExecutive4.png")} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.imageView}
                    onPress={() => navigation.navigate("ProjectsView", 
                    // { link: 'https://wmc.aljalildevelopers.com/' }
                    { link: 'https://aljalildevelopers.com/pages/west-marina-cottages-and-villas' }
                    
                    )}>
                    <Image
                        style={{ alignSelf: 'center', width: 210, height: 109 }}
                        source={require("../../assets/images/marrinaCottage.png")} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.imageView}
                    onPress={() => navigation.navigate("ProjectsView", 
                    // { link: 'https://msc.aljalildevelopers.com/' }
                    { link: 'https://aljalildevelopers.com/pages/marina-sports-city' }

                    
                    )}>
                    <Image
                        style={{ alignSelf: 'center', width: 210, height: 109 }}
                        source={require("../../assets/images/marinaSportCity.png")} />
                </TouchableOpacity>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5'
    },

    header: {
        backgroundColor: '#930000',
        flex: 0.1,
        //   height: 70,
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

    imageView: {
        backgroundColor: '#353840',
        borderRadius: 4,
        marginTop: "7%",
        width: '85%',
        height: "17%",
        alignSelf: 'center'
    }

})