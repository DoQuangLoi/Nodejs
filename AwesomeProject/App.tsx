/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AppNavigator from './Home/src/User/Login/AppNavigator';
import { UserProvider } from './Home/src/User/Login/UserContext';
import UserProfileU from './Home/src/User/Profile/UserProfileU';
function App(): JSX.Element {


  return (
    <SafeAreaView style={styles.body}>
      <UserProvider>
        <AppNavigator></AppNavigator>
      </UserProvider>
      {/* <UserProfileU></UserProfileU> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
});

export default App;
