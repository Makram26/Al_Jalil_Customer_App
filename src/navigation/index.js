import React, { useEffect, useState } from 'react';
import { Text,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator';
import AuthContext from '../Routes/context';
export default function Providers() {
    const [userID, setUserID] = useState(null);
    useEffect(() => {
        (async () => {
            const id = await AsyncStorage.getItem("user_id");
            if (id !== null) {
                setUserID(id);
            }
        })();
    }, []);
    return (
        <SafeAreaView style={{flex: 1 }}>
            <AuthContext.Provider
                value={{ userID, setUserID }}>
                {userID ? <AppNavigator /> : <AuthNavigator />}
            </AuthContext.Provider>
        </SafeAreaView>
    );
}