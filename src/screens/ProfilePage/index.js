import React from 'react';
import {Text, View, Pressable, Image} from 'react-native';

import styles from './styles';
import InputRow from '../../components/InputRow';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfilePage = props => {
  return (
    <View style={styles.mainContainer}>
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
            <MaterialIcons name="edit" size={22} color="#4267B2" />
          </View>
        </Pressable>
      </View>

      <View>
        <InputRow data={{rowId: 1, title: 'Name'}} />
        <InputRow data={{rowId: 2, title: 'Phone'}} />
        <InputRow data={{rowId: 3, title: 'Email'}} />
        <InputRow data={{rowId: 4, title: 'Tell us about yourself'}} />
      </View>
    </View>
  );
};

export default ProfilePage;
