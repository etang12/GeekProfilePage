import React from 'react';
import {Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const UpdateButton = props => {
  let rowFieldInput;
  let {rowInput, rowId} = props;
  const navigation = useNavigation();
  if (rowId === 1) {
    rowFieldInput = `${rowInput.firstName} ${rowInput.lastName}`;
  } else {
    rowFieldInput = `${rowInput.data}`;
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
        const rowFieldName = getRowField(rowId);
        navigation.navigate('EditProfile', {
          [rowFieldName]: rowFieldInput,
          rowId: rowId,
        });
      }}>
      <Text style={styles.updateText}>Update</Text>
    </Pressable>
  );
};

export default UpdateButton;
