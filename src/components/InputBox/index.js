import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

const InputBox = props => {
  const {name} = props.info;
  const onTextChange = props.onTextChange;

  const width = name === 'First Name' || name === 'Last Name' ? '90%' : '100%';

  return (
    <View style={styles.inputContainer}>
      <View style={[styles.inputBox, {width: width}]}>
        <View style={styles.text}>
          <Text style={styles.textLabel}>{name}</Text>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={onTextChange}
            maxLength={40}
          />
        </View>
      </View>
    </View>
  );
};

export default InputBox;
