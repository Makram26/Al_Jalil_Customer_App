import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DashBoard from '../screens/DashBoard'
import History from '../screens/Helpdesk/History'
import Colors from '../constants/Colors'
import RequestHistory from '../screens/RequestHistory/RequestHistory'
import NewRequest from '../screens/Helpdesk/NewRequest'
import TransferRequest from '../screens/RequestHistory/TransferRequest'
import TransactionLedger from '../screens/TransactionLedger/TransactionLedger'
import PaymentDetails from '../screens/TransactionLedger/PaymentDetails'
import Documents from '../screens/Documents/Documents'

import MobileLogin from '../screens/MobileLogin'
import OTPVarification from '../screens/OTPVarification'
import DevelopmentProgress from '../screens/DevelopmentProgress'
import Help from '../screens/Help'
import Blogs from '../screens/Blogs'
import SOP from '../screens/SOP'
import ProjectsView from '../screens/Projects/ProjectsView'
import Menu from '../screens/Projects/Menu'
import DrawerNav from './DrawerNavigation/DrawerNav'
import Feedback from './DrawerNavigation/Feedback'
import Contactus from './DrawerNavigation/Contactus'

const Stack = createStackNavigator();
export default function AppNavigator() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='DashBoard'>
                <Stack.Screen name='DashBoard' component={DashBoard} options={{ headerShown: false }} />
                <Stack.Screen name='History' component={History} options={{ headerShown: false }} />
                <Stack.Screen name='RequestHistory' component={RequestHistory} options={{ headerShown: false }} />
                <Stack.Screen name='NewRequest' component={NewRequest} options={{ headerShown: false }} />
                <Stack.Screen name='TransferRequest' component={TransferRequest} options={{ headerShown: false }} />
                <Stack.Screen name='TransactionLedger' component={TransactionLedger} options={{ headerShown: false }} />
                <Stack.Screen name='PaymentDetails' component={PaymentDetails} options={{ headerShown: false }} />
                <Stack.Screen name='Documents' component={Documents} options={{ headerShown: false }} />

                <Stack.Screen name='MobileLogin' component={MobileLogin} options={{ headerShown: false }} />
                <Stack.Screen name='OTPVarification' component={OTPVarification} options={{ headerShown: false }} />
                <Stack.Screen name='DevelopmentProgress' component={DevelopmentProgress} options={{ headerShown: false }} />
                <Stack.Screen name='Help' component={Help} options={{ headerShown: false }} />
                <Stack.Screen name='Blogs' component={Blogs} options={{ headerShown: false }} />
                <Stack.Screen name='SOP' component={SOP} options={{ headerShown: false }} />
                <Stack.Screen name='ProjectsView' component={ProjectsView} options={{ headerShown: false }} />
                <Stack.Screen name='Menu' component={Menu} options={{ headerShown: false }} />

                <Stack.Screen name='Drawer' component={DrawerNav} options={{ headerShown: false }} />
                <Stack.Screen name='Feedback' component={Feedback} options={{ headerShown: false }} />
                <Stack.Screen name='Contactus' component={Contactus} options={{ headerShown: false }} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}