/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StatusBar} from 'react-native';

import Router from './src/navigation/Router';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#4169e1'} />
      <Router />
    </>
  );
};

export default App;
