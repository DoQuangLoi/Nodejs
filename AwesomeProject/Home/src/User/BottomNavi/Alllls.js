import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllBottom from './AllBottom';
import DetailNews from './DetailNews';
import ToTal from '../Search/SearchToTal';

import PostNews from './../Upload/PostNews';

const stack = createNativeStackNavigator();
const Alllls = () => {
    return (
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name='Home' component={AllBottom} />
            <stack.Screen name='Detail' component={DetailNews} />
            <stack.Screen name='Search' component={ToTal} />
            <stack.Screen name='Creat' component={PostNews} />
        </stack.Navigator>
    )
}

export default Alllls

const styles = StyleSheet.create({})