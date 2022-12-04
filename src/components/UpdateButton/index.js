import React from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles';

const UpdateButton = props => {
  return (
    <Pressable
      style={styles.updateButton}
      onPress={() => {
        console.warn('Update pressed');
      }}>
      <Text style={styles.updateText}>Update</Text>
    </Pressable>
  );
};

export default UpdateButton;
