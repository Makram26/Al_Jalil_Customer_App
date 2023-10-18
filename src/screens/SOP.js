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
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import BackIcon from 'react-native-vector-icons/AntDesign';
import BellIcon from 'react-native-vector-icons/FontAwesome'
import Search from 'react-native-vector-icons/Feather';
import DocumentDownloadCard from '../component/DocumentDownloadCard';
import documentsData from '../utils/DocumentsData';
import WebView from 'react-native-webview';

export default function SOP({ navigation }) {

  const [searchSOP, setSearchSOP] = useState('')
  const [isLoading, setLoading] = useState(false);

  

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
            <Text style={styles.headerText}>SOP'S</Text>

          </TouchableOpacity>
          <BellIcon name="bell" size={20} color="#FFFFFF" />
        </View>
      </View>


      <ScrollView contentContainerStyle={{ flex: 1,width:"100%", marginBottom: 2 }}>
                <WebView source={{ uri: 'https://aljalildocs.ifrs16.app/sops' }}
                onLoadStart={(syntheticEvent) => {
                    setLoading(true);
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
               
             
                
            </ScrollView>
      {/* <View style={{ flex: 1, width: '90%', alignSelf: 'center', }}> */}
        {/* Search Bar */}
        {/* <View style={styles.searchView}>
          <TextInput
            placeholder= 'Search SOPs here'
            keyboardType='default'
            value={searchSOP}
            onChangeText={(value) => setSearchSOP(value)}
          />
          <Search name='search' size={20} color='#000' />
        </View> */}

        {/* Documents List */}
        {/* <FlatList
          data={documentsData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(items) => items.id}
          renderItem={({ item }) => {
            return (
              <DocumentDownloadCard
                docsName={item.docName}
                docsLink={item.docLink}
              />
            )
          }} /> */}
      {/* </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5'
  },

  header: {
    backgroundColor: '#930000',
    // flex: 0.1,
    height: 70,
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

  searchView: {
    flexDirection: 'row',
    backgroundColor: '#E3E3E7',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0.8,
    borderColor: '#E3E3E7',
    paddingHorizontal: 10,
    marginVertical: 10,
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