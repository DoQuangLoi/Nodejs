import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React,{useState, useEffect, useContext} from 'react'
import { UserContext } from '../Login/UserContext'
const UserProfileU = (props) => {
const{User, setUser} =useContext(UserContext);
 
  return (
    <View style={styles.body}>
      <View style={{ height: 200, alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Profile</Text>
        <Image style={styles.UserImage} source={require('../../Img/Ellipse13.jpg')} />
      </View>

      <View style={styles.ArowText}>
        <Text>User name</Text>
        <View style={styles.InputArow}>
          <TextInput style={styles.textIn}
          value={User.name}></TextInput>
        </View>
      </View>
      <View style={styles.ArowText}>
        <Text>Fullname</Text>
        <View style={styles.InputArow}>
          <TextInput style={styles.textIn} placeholder='Đỗ Quang Lợi'
          value={User.name}
          ></TextInput>
        </View>
      </View>
      <View style={styles.ArowText}>
        <Text>Email address</Text>
        <View style={styles.InputArow}>
          <TextInput style={styles.textIn} placeholder='Đỗ Quang Lợi'
          value={User.address}></TextInput>
        </View>
      </View>
      <View style={styles.ArowText}>
        <Text>Phone number</Text>
        <View style={styles.InputArow}>
          <TextInput style={styles.textIn} placeholder='Đỗ Quang Lợi' keyboardType='number-pad'
          value={User.phone} ></TextInput>
        </View>
      </View>
      

    </View>
  )
}

export default UserProfileU

const styles = StyleSheet.create({
  InputArow: {
    width: '100%',
    height: 50,
    borderColor: '#000',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth:1,
    marginTop:2
  }, textIn: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12
  }, ArowText: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    
  },
  UserImage: {
    width: 150,
    height: 150,
    borderRadius: 1000,
    alignContent: 'center'
  }, title: {
    color: '#000',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
    letterSpacing: 0.12,
    justifyContent: 'center'
  }, body: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24
  }
})