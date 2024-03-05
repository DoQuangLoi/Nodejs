import { View, Text } from 'react-native'
import React from 'react'
import { UserContext } from './UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './Login';
import SignIn from './SignUp';
import ForgotPass from './ForgotPass';

const Stack = createNativeStackNavigator();
const Stack1 = () => {

  return (


    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='SignUp' component={SignIn} />
      <Stack.Screen name='Forgot' component={ForgotPass} />
    </Stack.Navigator>






  )
}

export default Stack1