import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'

const Onboarding3 = () => {
  return (
    <View style={style.container}>
    <Image style={style.banner} source={require('../Login/Img/onboardin3.png')} />

    <View style={style.View}>
      <Text style={style.big_text}>Lorem Ipsum is simply dummy</Text>
      <Text style={style.small_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
    </View>
    <View style={style.View2}>
      <View style={style.Image}>
<Image source={require('../../Img/Ellipse24.png')}></Image>
<Image source={require('../../Img/Ellipse25.png')}></Image>
<Image source={require('../../Img/Ellipse26.png')}></Image>
      </View>
      <View style={style.View3}>
      <Text style={style.Text}>Back</Text>
      <View style={style.button1} >
       
      <Button title='next'/>
      </View>
      </View>
     
    

    </View>
  </View>

  )
}
const style = StyleSheet.create({
  Image:{
    width:50,
    height:50,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around',
    paddingBottom:10
  },View3:{
    flexDirection:'row'
  },Text: {
    width: 50,
    height: 50,
    textAlign:'center',
    overflow:'hidden',
   paddingTop:10
  }, button1: {
    width: 80,
    height: 40,
    justifyContent: 'center',

  },
  View2: {
    width: 380,
    height: 50,
    paddingTop:30,
    paddingBottom:30,
    paddingLeft:24,
    paddingRight:24,
    flexDirection: 'row',
    justifyContent: 'space-between',
 
  },

  small_text: {
    width: 290,
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
export default Onboarding3