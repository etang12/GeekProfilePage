import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ProfilePage from '../screens/ProfilePage';
import UpdateNamePage from '../screens/UpdateNamePage';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'ProfilePage'}
          component={ProfilePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'UpdateName'}
          component={UpdateNamePage}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
