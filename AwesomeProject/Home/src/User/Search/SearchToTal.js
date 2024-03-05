import { StyleSheet, Text, View, Image, TextInput,FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import { MaterialTopTabBar } from '@react-navigation/material-top-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchAuthor from './SearchAuthor'
import SearchTopic from './SearchTopic'
import All from '../TopNavi/All'
import { UserContext } from '../Login/UserContext'
const Toptap = createMaterialTopTabNavigator();
const ToTal = (props) => {
  const {navigation} = props;
 const {setUser} = useContext(UserContext);
 const {setKeyword} = useContext(UserContext);
  return (
    <View style={styles.body}>
      <View style={styles.search}>
        <TextInput style={styles.TextSearch}
          onChangeText={(text) => {
            setKeyword(text);

          }}
         
          placeholder='Search'></TextInput>


      </View>
     
      <Toptap.Navigator screenOptions={{
        tabBarScrollEnabled: true,
        tabBarLabelStyle: { width: '100%', fontSize: 16, textTransform: 'capitalize' },
        tabBarItemStyle: { width: 65, height: 40, backgroundColor: 'transparent' },
        tabBarStyle: { width: '55%', left: '22%', backgroundColor: 'transparent' }

      }} >
        <Toptap.Screen name='News' component={All}  />
        <Toptap.Screen name='Topic' component={SearchTopic} />
        <Toptap.Screen name='Author' component={SearchAuthor} />
      </Toptap.Navigator>
   
      
    </View>
  )
  console.log(keyword)
}

export default ToTal

const styles = StyleSheet.create({
  TextSearch: {
    fontSize: 15,
    paddingLeft: 10
  }, search: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',

  }, body: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff'
  }
})