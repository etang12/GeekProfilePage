import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import EditProfilePage from '../screens/EditProfilePage';
import UpdateNamePage from '../screens/UpdateNamePage';
import UpdatePage from '../screens/UpdatePage';
import UpdateBioPage from '../screens/UpdateBioPage';
import UpdatePicturePage from '../screens/UpdatePicturePage';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'EditProfilePage'}
          component={EditProfilePage}
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
        <Stack.Screen
          name={'UpdatePhone'}
          component={UpdatePage}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name={'UpdateEmail'}
          component={UpdatePage}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name={'UpdateBio'}
          component={UpdateBioPage}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name={'UpdatePicture'}
          component={UpdatePicturePage}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
