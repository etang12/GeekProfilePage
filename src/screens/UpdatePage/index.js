import React from 'react';
import {Text, View, Pressable, TextInput} from 'react-native';
import styles from './styles';

import InputBox from '../../components/InputBox';
import UpdateButton from '../../components/UpdateButton';

const UpdatePage = props => {
  const title = props.data.title;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <InputBox info={{name: 'First Name'}} />
      </View>
      <View style={styles.updateButton}>
        <UpdateButton />
      </View>
    </View>
  );
};

export default UpdatePage;
