import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid, Alert } from 'react-native'
import Download from 'react-native-vector-icons/MaterialCommunityIcons';
import RNFetchBlob from 'rn-fetch-blob';

export default function DocumentDownloadCard({docsName, docsLink }) {

    const fileUrl = docsLink;
    const checkPermission = async () => {
        if (Platform.OS === 'ios') {
          downloadFile();
        } else {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'Storage Permission Required',
                message:
                  'Application needs access to your storage to download File',
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              // Start downloading
              downloadFile();
              console.log('Storage Permission Granted.');
              Alert.alert("Downloading ", 'Downloading start, Please Wait...')
            } else {
              // If permission denied then show alert
              Alert.alert('Error','Storage Permission Not Granted');
            }
          } catch (err) {
            // To handle permission related exception
            console.log("++++"+err);
          }
        }
      };

      const downloadFile = () => {
        // Get today's date to add the time suffix in filename
        let date = new Date();
        // File URL which we want to download
        let FILE_URL = fileUrl;    
        // Function to get extention of the file url
        let file_ext = getFileExtention(FILE_URL);
        file_ext = '.' + file_ext[0];
        // config: To get response by passing the downloading related options
        // fs: Root directory path to download
        const { config, fs } = RNFetchBlob;
        let RootDir = fs.dirs.PictureDir;
        let options = {
          fileCache: true,
          addAndroidDownloads: {
            path:
              RootDir+
              '/file_' + 
              Math.floor(date.getTime() + date.getSeconds() / 2) +
              file_ext,
            description: 'downloading file...',
            notification: true,
            // useDownloadManager works with Android only
            useDownloadManager: true,   
          },
        };
        config(options)
          .fetch('GET', FILE_URL)
          .then(res => {
            // Alert after successful downloading
            console.log('res -> ', JSON.stringify(res));
            alert('File Downloaded Successfully.');
          });
      };

      const getFileExtention = fileUrl => {
        // To get the file extension
        return /[.]/.exec(fileUrl) ?
                 /[^.]+$/.exec(fileUrl) : undefined;
      };

    return (
        <View style={styles.documentDownloadContainer}>
            <Text style={styles.downloadText}>{docsName}</Text>
            <TouchableOpacity onPress={()=>checkPermission()}>
                <Download name="arrow-collapse-down" size={20} color={"#B00029"} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    documentDownloadContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        padding: 15,
        marginVertical: 10,
        elevation: 5,
    },
    downloadText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#000'
    }
})