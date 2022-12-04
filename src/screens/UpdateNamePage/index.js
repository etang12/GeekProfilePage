import React from 'react';
import {Text, View, Pressable, TextInput} from 'react-native';
import styles from './styles';

import InputBox from '../../components/InputBox';
import UpdateButton from '../../components/UpdateButton';

const UpdateNamePage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your name?</Text>
      <View style={styles.inputContainer}>
        <InputBox info={{name: 'First Name'}} />
        <InputBox info={{name: 'Last Name'}} />
      </View>
      <View style={styles.updateButton}>
        <UpdateButton />
      </View>
    </View>
  );
};

export default UpdateNamePage;
