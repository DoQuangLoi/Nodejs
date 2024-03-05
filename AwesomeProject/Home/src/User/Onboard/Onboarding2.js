import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding1 from './Onboarding1';
const Stack = createNativeStackNavigator();
const Onboarding2 = () => {
  return (

    <View style={style.container}>
      <Image style={style.banner} source={require('../../Img/boarding2.png')} />

      <View style={style.View}>
        <Text style={style.big_text}>Lorem Ipsum is simply dummy</Text>
        <Text style={style.small_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </View>
      <View style={style.View2}>
        <View style={style.Image}>
        <Image source={require('../../Img/Ellipse25.png')}></Image>
          <Image source={require('../../Img/Ellipse24.png')}></Image>
         
          <Image source={require('../../Img/Ellipse26.png')}></Image>
        </View>
        <View style={style.button1} >
          <Button title='next' />
        </View>


      </View>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Onboarding1' component={Onboarding1} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  )
}
const style = StyleSheet.create({
  Image:{
    width:50,
    height:50,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around'
  },Text: {
    width: 80,
    height: 50,
    textAlign: 'center',
    paddingTop: 100
  }, button1: {
    width: 80,
    height: 50,
    justifyContent: 'center',
  },
  View2: {
    width: 380,
    height: 50,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  small_text: {
    width: 318,
    height: 48,
    fontSize: 16,
    fontWeight: '400',
  },
  big_text: {
    width: 279,
    height: 72,
    fontSize: 24,
    fontWeight: '700',
    color: 'black',

  }, View: {
    width: 318,
    height: 120,
    margin: 24
  },
  banner: {
    width: 428,
    height: 500
  },
  body: {
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  }
})
export default Onboarding2