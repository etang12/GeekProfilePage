import React, {useState, useEffect} from 'react';
import {Text, View, Pressable, Image, ScrollView} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';

import styles from './styles';
import InputRow from '../../components/InputRow';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

/*
PROCESS FOR UPDATING DATA ON PROFILE PAGE
Flow: Profile page (click on InputRow) --> Update Page (fill in text input, click update) --> Profile Page
Upon returning to profile page, now have access to data filled in on update page in text input
Pass newly received data into InputRow's to generate input for the fields on profile picture upon re-render
*/

const EditProfilePage = props => {
  const route = useRoute();
  const navigation = useNavigation();
  const [formFields, setFormFields] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    bio: '',
    profilePicture:
      'https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png',
  });

  // sets state for formFields upon receiving data from route.params (AKA update button pressed)
  // Update button getting pressed navigates back to profile page with data being passed along route
  // Handles data for multiple pages by providing key of field that needs to be changed
  useEffect(() => {
    if (route.params) {
      setFormFields(prevState => {
        // make copy of previous state
        const newState = {...prevState};
        console.log(`ROUTE PARAMS: ${Object.entries(route.params)}`);
        // access each key, value pair in route.params and set corresponding key, value pair in formFields
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

  // choose image from device storage
  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      allowEditing: true,
      quality: 1,
    });
    if (!result.didCancel) {
      const pictureUri = result.assets[0].uri;
      setFormFields(prevState => ({
        ...prevState,
        profilePicture: pictureUri,
      }));
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.editProfileTitle}>Edit Profile</Text>
        <View>
          <Pressable
            style={styles.imageViewContainer}
            onPress={() => {
              // navigation.navigate('UpdatePicture');
              chooseImage();
            }}>
            <Image
              style={styles.profileImage}
              source={{
                uri: formFields.profilePicture,
              }}
            />
          </Pressable>
          <View style={styles.editIcon}>
            <MaterialIcons name="edit" size={24} color="#4267B2" />
          </View>
        </View>
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

export default EditProfilePage;
