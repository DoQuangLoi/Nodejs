import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserProfile from './UserProfile';
import UserProfileU from './UserProfileU';
const Stack = createNativeStackNavigator();
const ProfileAll = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='User' component={UserProfile} />
    <Stack.Screen name='Edit' component={UserProfileU} />

  </Stack.Navigator>
  )
}

export default ProfileAll

const styles = StyleSheet.create({})
