import React, {useState, useEffect} from 'react';
import {Text, View, Pressable, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import InputRow from '../../components/InputRow';

const EditProfilePage = props => {
  const route = useRoute();
  const [formFields, setFormFields] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    bio: '',
    profilePicture:
      'https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png',
  });

  useEffect(() => {
    if (route.params) {
      setFormFields(prevState => {
        const newState = {...prevState};
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

  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
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
