
import React, { useContext} from 'react'
import { UserContext } from './UserContext'
import { NavigationContainer } from '@react-navigation/native'
import Stack1 from './Stack1'
import Alllls from '../BottomNavi/Alllls'
const AppNavigator = () => {
    const {User} = useContext(UserContext);
  return (
   
  <NavigationContainer>
        {User ? <Alllls/>: <Stack1/> }
    </NavigationContainer>
   
  
  )
}

export default AppNavigator
