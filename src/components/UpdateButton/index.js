import React from 'react';
import {Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const UpdateButton = props => {
  const navigation = useNavigation();
  let rowFieldInput;
  let rowInputObj;
  const rowId = props.rowId;
  if (rowId === 1) {
    rowInputObj = props.rowInput;
    rowFieldInput = `${rowInputObj.firstName} ${rowInputObj.lastName}`;
  } else {
    rowInputObj = props.rowInput;
    rowFieldInput = `${rowInputObj.data}`;
  }

  const getRowField = rId => {
    switch (rId) {
      case 1:
        return 'fullName';
      case 2:
        return 'phoneNumber';
      case 3:
        return 'emailAddress';
      case 4:
        return 'bio';
      default:
        return null;
    }
  };

  return (
    <Pressable
      style={styles.updateButton}
      onPress={() => {
        const rowField = getRowField(rowId);
        console.warn(rowField);
        navigation.navigate('ProfilePage', {
          [rowField]: rowFieldInput,
          rowId: rowId,
        });
      }}>
      <Text style={styles.updateText}>Update</Text>
    </Pressable>
  );
};

export default UpdateButton;
