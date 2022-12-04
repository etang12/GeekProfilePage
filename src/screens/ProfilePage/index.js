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
        <View style={{alignSelf: 'center'}}>
          <Image
            style={styles.profileImage}
            source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
            }}
          />
          <View style={styles.editIcon}>
            <MaterialIcons name="edit" size={26} color="#4267B2" />
          </View>
        </View>
      </View>

      <View>
        <InputRow />
      </View>
    </View>
  );
};

export default ProfilePage;
