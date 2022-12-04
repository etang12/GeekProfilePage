import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

const InputBox = props => {
  const name = props.info.name;

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputBox}>
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
