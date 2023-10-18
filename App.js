import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Providers from './src/navigation';
const Stack = createStackNavigator();
const App = () => {
  return (
    <Providers />
  )
}
export default App