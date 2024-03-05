import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import All from '../TopNavi/All'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { login, logout } from '../../http/UserHttp'
import { UserContext } from '../Login/UserContext'
const Toptap = createMaterialTopTabNavigator();

const UserProfile = (props) => {
  const {navigation} = props;
  const { User } = useContext(UserContext);
  console.log(User.name)
  const logOut = async () =>{
    try {
      setUser(false);
      return logout;
    } catch (error) {
      
    }
  
  }
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View style={styles.InHead}>
          <Text style={styles.textInhead}>Profile</Text>
          <TouchableOpacity onPress={logOut}>
          <Image source={require('../../Img/Setting.jpg')} />
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.ViewText}>
        
        <Image style={styles.ImageUser} source={require('../../Img/Ellipse13.jpg')} />
      
       
        <View style={styles.InSize}>
          <Text style={styles.AmounText}>2156</Text>
          <Text>Fllowers</Text>
        </View>
        <View style={styles.InSize}>
          <Text style={styles.AmounText}>567</Text>
          <Text>Fllowing</Text>
        </View>
        <View style={styles.InSize}>
          <Text style={styles.AmounText}>2156</Text>
          <Text>Fllower</Text>
        </View>

      </View>
      <View style={styles.intro}>
        <Text style={styles.AmounText}>Name: {User.name}</Text>
        <Text style={styles.AmounText}>Email: {User.email}</Text>
        <Text style={styles.textIntro}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </View>
      <View style={styles.viewButtom}>
        <TouchableOpacity style={styles.Buttom} onPress={()=>navigation.navigate('Edit')} >
          <Text>EditproFile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Buttom}>
          <Text>Website</Text>
        </TouchableOpacity>
      </View>
      <View>
     
          
  
      </View>

      <Toptap.Navigator screenOptions={{
            tabBarScrollEnabled: true,
            tabBarLabelStyle: { width: '100%', fontSize: 16, textTransform: 'capitalize' },
            tabBarItemStyle: { width: 65, height: 40, backgroundColor: 'transparent' },
            tabBarStyle: { width: '55%', left: '30%', backgroundColor: 'transparent' }

          }} >
            <Toptap.Screen name='News' component={All} />
            <Toptap.Screen name='Recent' component={All} />

          </Toptap.Navigator>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  Buttom: {
    width: '45%',
    backgroundColor: '#1877F2',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }, viewButtom: {
    flexDirection: 'row',
    height: 48,
    marginTop: 16,
    justifyContent: 'space-between'
  }, textIntro: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: 0.12
  }, intro: {
    marginTop: 16
  }, AmounText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#000'
  }, InSize: {
    height: '100%',
    justifyContent: 'center'
  }, ViewText: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    alignContent: 'center',

  }, ImageUser: {
    width: 100,
    height: 100
  }, textInhead: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: '#000'
  }, InHead: {
    width: '58%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, header: {
    width: '100%',
    height: 30,
    alignItems: 'flex-end'
  }, body: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 24
  }
})