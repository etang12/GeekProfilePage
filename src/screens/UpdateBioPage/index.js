import React from 'react';
import {Text, View, Pressable, TextInput} from 'react-native';
import styles from './styles';

import InputBox from '../../components/InputBox';
import UpdateButton from '../../components/UpdateButton';

// update page screen for phone number and email
const UpdateBioPage = props => {
  const placeHolder = `Write a little bit about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? Etc.`;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>What type of passenger are you?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            textAlignVertical="top"
            placeholder={placeHolder}
          />
        </View>
        <View style={styles.updateButton}>
          <UpdateButton />
        </View>
      </View>
    </View>
  );
};

export default UpdateBioPage;
