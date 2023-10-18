import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import SplashScreen from '../screens/SplashScreen'
import SignUp from '../screens/SignUp'
import AppNavigator from './AppNavigator'
import OTPVarification from '../screens/OTPVarification'
import TermsCondition from '../screens/TermsCondition'

const Stack = createStackNavigator();
const AuthNavigator = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='SplashScreen'>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name='TermsCondition' component={TermsCondition} options={{ headerShown: false }} />
                <Stack.Screen name='OTPVarification' component={OTPVarification} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AuthNavigator