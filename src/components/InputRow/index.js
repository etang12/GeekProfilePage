import React from 'react';
import {Text, View, Pressable} from 'react-native';

import styles from './styles';

const InputRow = props => {
  return (
    <Pressable
      style={styles.row}
      onPress={() => {
        console.warn('clicked');
      }}>
      <Text>Name</Text>
      <Text>Eric Tang</Text>
    </Pressable>
  );
};

export default InputRow;
