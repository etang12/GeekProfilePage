/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const InputRow = props => {
  const title = props.data.title;
  const rowId = props.data.rowId;
  const navigation = useNavigation();

  const getPageName = id => {
    switch (id) {
      case 1:
        return 'UpdateName';
      case 2:
        return 'UpdatePhone';
      case 3:
        return 'UpdateEmail';
      case 4:
        return 'UpdateBio';
      default:
        return null;
    }
  };

  return (
    <Pressable
      style={styles.row}
      onPress={() => {
        console.warn('clicked ' + rowId);
        const pageName = getPageName(rowId);
        navigation.navigate(pageName);
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
