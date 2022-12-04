import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

const InputBox = props => {
  const name = props.info.name;

  // initial thoughts
  // deals with deciding if inputbox is being used for updating name (requires 2) or updating phone/email (1)
  // set the correct width for respective page
  let width = '100%';
  if (name === 'First Name' || name === 'Last Name') {
    width = '90%';
  }

  return (
    <View style={styles.inputContainer}>
      <View style={[styles.inputBox, {width: width}]}>
        <View style={styles.text}>
          <Text style={styles.textLabel}>{name}</Text>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    </View>
  );
};

export default InputBox;
