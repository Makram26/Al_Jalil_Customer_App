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

import Video from 'react-native-video';

import progessData from '../utils/ProgressData';
import ProgressCard from '../component/ProgressCard';

export default function DevelopmentProgress({ navigation }) {

  // const [images, setImages] = useState([])
  // const [videos, setVideos] = useState([])

  const [btnGallery, setBtnPGallery] = useState(true)
  const [btnVideos, setBtnVideos] = useState(false)

  const [play, setPlay] = useState(false)

  const showData = (id) => {
    // console.log("id", id)
    if (id == 1) {
      setBtnPGallery(true)
      setBtnVideos(false)
    }
    if (id == 2) {
      setBtnPGallery(false)
      setBtnVideos(true)
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#930000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon name="arrowleft" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Development Progress</Text>
          <BellIcon name="bell" size={20} color="#FFFFFF" />
        </View>
      </View>

      <View style={{ flex: 0.9 }}>
        <View style={styles.stateContainer}>
          <TouchableOpacity
            style={[styles.stateChengeBtn, { backgroundColor: btnGallery ? '#930000' : '#E3E3E7' }]}
            onPress={() => showData(1)}>
            <Text style={[styles.stateChangeText, { color: btnGallery ? '#FFFFFF' : '#7D7F88' }]}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.stateChengeBtn, { backgroundColor: btnVideos ? '#930000' : '#E3E3E7' }]}
            onPress={() => showData(2)}>
            <Text style={[styles.stateChangeText, { color: btnVideos ? '#FFFFFF' : '#7D7F88' }]}>Videos</Text>
          </TouchableOpacity>
        </View>

        {
          btnGallery ?
            <FlatList
              data={progessData}
              keyExtractor={(value) => value.id}
              renderItem={({ item }) => {
                if (item.type == "image")
                  return (
                    <ProgressCard
                      image={item.image}
                      description={item.description}
                    />
                  )
              }}
            />
            :
            btnVideos ?
              <FlatList
                data={progessData}
                keyExtractor={(value) => value.id}
                renderItem={({ item }) => {
                  if (item.type === "video")
                    return (
                      <Video
                        source={{ uri: item.video }}
                        paused={false}
                        repeat={true}
                        muted={false}
                        fullscreen={true}
                        fullscreenAutorotate
                        resizeMode='cover'
                        controls
                        hideShutterView={false}
                        playWhenInactive={true}
                        poster={'https://www.triumphhomedepot.com/admin_assets/css/ajax-loader.gif'}
                        posterResizeMode='contain'
                        style={{ width: "85%", height: 156, borderColor: '#000', borderWidth: 1, borderRadius: 4, alignSelf: 'center', marginVertical: 10, marginHorizontal: 30 }}
                      />
                    )
                }}
              />
              :
              null
        }

      </View>

      {/* Payment State Change Button */}


    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },

  header: {
    backgroundColor: '#930000',
    // height: 70,
    flex: 0.1,
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTextContainer: {
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: 10,
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },


  stateContainer: {
    flexDirection: 'row',
    width: '80%',
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  stateChengeBtn: {
    height: 35,
    // flex: 0.4,
    width: '42%',
    borderRadius: 4,
    borderWidth: 0.8,
    borderColor: '#E3E3E7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stateChangeText: {
    fontSize: 14,
    fontWeight: "400",
    textTransform: 'uppercase'
  },


  detailHeadingText: {
    color: '#CE0101',
    fontSize: 10,
    fontWeight: '400',
    width: 90
  },
  detailText: {
    color: '#788190',
    fontSize: 10,
    fontWeight: '400',
    width: 90,
  },


  bottomtext: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginHorizontal: 20,
  }
})