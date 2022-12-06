import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const InputRow = props => {
  const {rowId, title, content} = props.data;
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
        const pageName = getPageName(rowId);
        navigation.navigate(pageName, {
          rowId: rowId,
        });
      }}>
      <View>
        <Text style={styles.rowTitle}>{title}</Text>
        <Text style={styles.rowContent}>{content}</Text>
      </View>
      <View style={styles.rowIcon}>
        <Ionicons name="chevron-forward-outline" size={24} color="#b2b3b3" />
      </View>
    </Pressable>
  );
};

export default InputRow;
