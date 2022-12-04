/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const InputRow = props => {
  const title = props.title;
  
  return (
    <Pressable
      style={styles.row}
      onPress={() => {
        console.warn('clicked');
      }}>
      <View style={styles.rowText}>
        <Text style={{fontWeight: 'bold', color: 'lightgrey'}}>{title}</Text>
        <Text style={{fontWeight: 'bold', color: 'black'}}></Text>
      </View>
      <View style={styles.rowIcon}>
        <Ionicons name="chevron-forward-outline" size={24} color="lightgrey" />
      </View>
    </Pressable>
  );
};

export default InputRow;
