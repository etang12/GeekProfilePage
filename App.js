/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import styles from './styles';
// import ProfilePage from './src/screens/ProfilePage';
import UpdateNamePage from './src/screens/UpdateNamePage';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor={'#4267B2'} />

      {/* <ProfilePage /> */}
      <UpdateNamePage />
    </SafeAreaView>
  );
};

export default App;
