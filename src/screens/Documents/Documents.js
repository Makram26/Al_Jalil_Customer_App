import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, TextInput, ScrollView,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

import BellIcon from 'react-native-vector-icons/FontAwesome';
import BackIcon from 'react-native-vector-icons/AntDesign';
import Search from 'react-native-vector-icons/Feather';
import { Helpdesk_Styles } from '../../constants/Styles'
import WebView from 'react-native-webview';

import documentsData from '../../utils/DocumentsData';
import DocumentDownloadCard from '../../component/DocumentDownloadCard';


const Documents = ({ navigation }) => {

    const [documents, setDocuments] = useState('')
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
                        <Text style={styles.headerText}>Documents</Text>
                    </TouchableOpacity>
                    <BellIcon name="bell" size={20} color="#FFFFFF" />
                </View>
            </View>
            <ScrollView contentContainerStyle={{ flex: 1,width:"100%", marginBottom: 2 }}>
                <WebView source={{ uri: 'https://aljalildocs.ifrs16.app/documents' }}
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
               
                {/* Search Bar */}
                {/* <View style={styles.searchView}>
                    <TextInput
                        placeholder='Search Documents here'
                        keyboardType='default'
                        value={documents}
                        onChangeText={(value) => setDocuments(value)}
                    />
                    <Search name='search' size={20} color='#000' />
                </View> */}

                {/* Documents List */}
                {/* <FlatList
                data={documentsData}
                showsVerticalScrollIndicator={false}
                keyExtractor={(items) => items.id}
                renderItem = {({item}) => {
                    return(
                        <DocumentDownloadCard
                        docsName ={item.docName}
                        docsLink ={item.docLink}
                        />
                    )
                }}/> */}
                
            </ScrollView>
        </View>
    )
}

export default Documents

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
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