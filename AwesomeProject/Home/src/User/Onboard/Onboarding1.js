import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Login from './Demo/cart'

const Onboarding1 = () => {
    return (
        <View style={style.container}>
            <View style={style.View}>
            <Image style={style.Image} source={require('../../Img/Vector.png')}/>
           
            </View>
            
        </View>
    )
}
const style = StyleSheet.create({
    Image:{
        height:66,
        width:217,
    },View:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container: {
        height:'100%',
        justifyContent: 'center',
        
    },

})

export default Onboarding1