import React from 'react';
import {Text, View, Pressable, TextInput} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from './styles';

import InputBox from '../../components/InputBox';
import UpdateButton from '../../components/UpdateButton';

// update page screen for phone number and email
const UpdatePage = props => {
  // const title = props.data.title;
  const route = useRoute();

  const selectedRowId = route.params.rowId;
  console.warn(selectedRowId);
  const title =
    selectedRowId === 2 ? "What's your phone number?" : "What's your email?";
  const label =
    selectedRowId === 2 ? 'Your phone number' : 'Your email address';

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputContainer}>
          <InputBox info={{name: label}} />
        </View>
        <View style={styles.updateButton}>
          <UpdateButton />
        </View>
      </View>
    </View>
  );
};

export default UpdatePage;
