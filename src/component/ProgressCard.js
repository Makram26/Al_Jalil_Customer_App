import React, { useState, useEffect } from "react";
import { View, Text, StylesSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'

export default function ProgressCard({ image, description }) {
    return (
        <View style={{ marginHorizontal: 30, marginVertical: 10,  flex: 1,}}>
            <ImageBackground
                source={{ uri: image }}
                imageStyle={{borderRadius: 4}}
                resizeMode ='cover'
                style={{ width: '100%', height: 156, }}>

                <Image source={require("../assets/images/logo.png")} style={{ width: 40, height: 40, alignSelf: 'flex-end', margin: 12 }} />

                <View style={{justifyContent: 'flex-end'}}>
                    <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 20, color: '#fff', textAlign: 'center', marginTop: 60 }}>{description}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}