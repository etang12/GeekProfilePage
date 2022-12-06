import React, {useState, useEffect, useRef} from 'react';
import {Text, View, Pressable, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

import styles from './styles';
import InputRow from '../../components/InputRow';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

/*
PROCESS FOR UPDATING DATA ON PROFILE PAGE
Flow: Profile page (click on InputRow) --> Update Page (fill in text input, click update) --> Profile Page
Upon returning to profile page, now have access to data filled in on update page in text input
Pass newly received data into InputRow's to generate input for the fields on profile picture upon re-render
*/

/*
TODO
- update fields for phone, email, bio
- limit number of characters on text inputs
*/
const ProfilePage = props => {
  const route = useRoute();
  const [formFields, setFormFields] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    bio: '',
  });

  // sets state for formField upon receiving data from route.params (AKA update button pressed)
  // Update button getting pressed navigates back to profile page with data being passed along route
  // useEffect(() => {
  //   if (route.params) {
  //     setFormFields(prevState => ({
  //       ...prevState,
  //       field: route.params.InputData,
  //     }));
  //   }
  // }, [route.params]);

  // sets state for formFields upon receiving data from route.params (AKA update button pressed)
  // Update button getting pressed navigates back to profile page with data being passed along route
  // Handles data for multiple pages by providing key of field that needs to be changed
  useEffect(() => {
    if (route.params) {
      setFormFields(prevState => {
        // make copy of previous state
        const newState = {...prevState};
        console.log(`ROUTE PARAMS: ${Object.entries(route.params)}`);
        // access each key, value pair in route.params and change corresponding key, value pair in formFields
        Object.entries(route.params).map(obj => {
          const [key, value] = obj;
          if (key in newState) {
            newState[key] = value;
          }
        });
        return newState;
      });
    }
  }, [route.params]);

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={{fontSize: 26, fontWeight: 'bold', color: '#4267B2'}}>
          Edit Profile
        </Text>
        <Pressable
          onPress={() => {
            console.warn('edit profile clicked');
          }}>
          <Image
            style={styles.profileImage}
            source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
            }}
          />
          <View style={styles.editIcon}>
            <MaterialIcons name="edit" size={24} color="#4267B2" />
          </View>
        </Pressable>
      </View>

      <View>
        <InputRow
          data={{
            rowId: 1,
            title: 'Name',
            content: formFields.fullName,
          }}
        />
        <InputRow
          data={{rowId: 2, title: 'Phone', content: formFields.phoneNumber}}
        />
        <InputRow
          data={{rowId: 3, title: 'Email', content: formFields.emailAddress}}
        />
        <InputRow
          data={{
            rowId: 4,
            title: 'Tell us about yourself',
            content: formFields.bio,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ProfilePage;
