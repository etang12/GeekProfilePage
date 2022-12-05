import React from 'react';
import {Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const UpdateButton = props => {
  const fullNameObj = props.fullName;
  const rowId = props.rowId;
  const navigation = useNavigation();
  const fullName = `${fullNameObj.firstName} ${fullNameObj.lastName}`;
  return (
    <Pressable
      style={styles.updateButton}
      onPress={() => {
        console.warn(fullName);
        navigation.navigate('ProfilePage', {
          InputData: fullName,
          rowId: rowId,
        });
      }}>
      <Text style={styles.updateText}>Update</Text>
    </Pressable>
  );
};

export default UpdateButton;
