import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All from './All';

import Sport from './Sport';
const Tab = createMaterialTopTabNavigator();
const Newss = () => {
  return (
    <View style={styles.body}>

<Tab.Navigator screenOptions={{
    tabBarScrollEnabled:true,
    tabBarLabelStyle: {width:60, fontSize: 16, textTransform:'capitalize' },
    tabBarItemStyle: { width: 65,height:40 },

    
  }}>
      <Tab.Screen name="All" component={All} 
     />
      <Tab.Screen name="Sport" component={All} />
      <Tab.Screen name="Politics" component={All} />
      <Tab.Screen name="Bussiness" component={All} />
      <Tab.Screen name="Health" component={All} />
      <Tab.Screen name="Travel" component={All} />
      <Tab.Screen name="Science" component={All} />
    </Tab.Navigator>

    </View>
 

    
  )
}

export default Newss

const styles = StyleSheet.create({
body:{
  
  width:'100%',
  height:300,
    paddingLeft:0,

    backgroundColor:'#fff'
}
})