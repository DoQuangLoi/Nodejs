import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import News from '../TopNavi/News';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileAll from '../Profile/ProfileAll';
import PostNews from '../Upload/PostNews';
const Tab = createBottomTabNavigator();
const AllBottom = () => {
  return (
    <Tab.Navigator style={{flex:1}} option={{headerShown: false, tabBarVisible: false, }}>
      <Tab.Screen name="News" component={News}
        options={ {tabBarIcon:(({size,focused,color})=>{
            return (
              <Image
                style={{ width:30, height: 30 }}
                resizeMode='contain'
                source={require('../../Img/Home.png')}
              />
            );
          }),
          tabBarLabelStyle:({fontSize:13}),
          headerShown: false
          }} />
      <Tab.Screen name="Explore" component={News}
      options={ {tabBarIcon:(({size,focused,color})=>{
        return (
          <Image
            style={{ width:30, height: 30 }}
            resizeMode='contain'
            source={require('../../Img/Compass.png')}
          />
        );
      }),
      tabBarLabelStyle:({fontSize:13}),
      headerShown: false}}  />
      <Tab.Screen name="Bookmark" component={PostNews}
      options={ {tabBarIcon:(({size,focused,color})=>{
        return (
          <Image
            style={{ width:30, height: 30 }}
            resizeMode='contain'
            source={require('../../Img/BookmarkIcon.png')}
          />
        );
      }),
      tabBarLabelStyle:({fontSize:13}),
      headerShown: false}}  />
      <Tab.Screen name="Profile" component={ProfileAll} 
      options={ {tabBarIcon:(({size,focused,color})=>{
        return (
          <Image
            style={{ width:30, height: 30 }}
            resizeMode='contain'
            source={require('../../Img/Profile.png')}
          />
        );
      }),
      tabBarLabelStyle:({fontSize:13}),
      headerShown: false}} />
  
    </Tab.Navigator>



  )
}

export default AllBottom

const styles = StyleSheet.create({})