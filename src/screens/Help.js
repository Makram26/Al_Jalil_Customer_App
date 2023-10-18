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
  Linking
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import BackIcon from 'react-native-vector-icons/AntDesign';
import BellIcon from 'react-native-vector-icons/FontAwesome'
import DownIcon from 'react-native-vector-icons/Feather';

import QuestionCard from '../component/QuestionCard';
import questionData from '../utils/Questions';

export default function Help({ navigation }) {

  const number= 3227576302
  const message = 'How we can help you?'

  const whatsAppOpen = () => {
    // Linking.openURL('whatsapp://app')
    Linking.openURL('http://api.whatsapp.com/send?phone=92' + number + 
    "&text=" + message)
  }

  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
      <StatusBar animated={true} backgroundColor="#930000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon name="arrowleft" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>How Can i Help?</Text>
          <TouchableOpacity>
            <BellIcon name="bell" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Body */}
      <View style={{ flex: 0.88, }}>
        <FlatList
          data={questionData}
          keyExtractor={(items) => items.id}
          renderItem={({ item }) => {
            return (
              <QuestionCard
                questions={item.question}
                answers={item.answer}
              />
            )
          }}
        />
      </View>

      <View style={{ flex: 0.12, }}>
        <View style={styles.whatsappContainer}>
          <Text style={styles.contactusText}>Contact Us?</Text>
          <TouchableOpacity 
              onPress={() => whatsAppOpen()}
              style={{ width: "20%",}}
              >
            <Image
              source={require("../assets/images/wtsapp.png")}
              style={styles.imageWhatsapp} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

// Linking.openURL("whatsapp://send?phone=${3029513932}&text=${message}}")
const styles = StyleSheet.create({
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

  searchBar: {
    height: 48,
    margin: 20,
    backgroundColor: "#F2F2F3",
    borderRadius: 4,
    borderColor: '#E3E3E7',
    borderWidth: 0.8,
    paddingHorizontal: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }, 

  whatsappContainer:{ 
    flexDirection: 'row', 
    alignSelf: 'flex-end' 
  },
  contactusText:{
     fontSize: 14, 
     fontWeight: '400', 
     lineHeight: 20, 
     color: '#000', 
     textDecorationLine: 'underline', 
     alignSelf:'flex-end',
     marginBottom:20,
    },
    imageWhatsapp: { 
      alignSelf: 'flex-end', 
      width: '90%', 
      height: "90%",  
      marginEnd: 10, 
      marginBottom: 10 
    }
  
})