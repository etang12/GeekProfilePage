import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles';

import InputBox from '../../components/InputBox';
import UpdateButton from '../../components/UpdateButton';
import { useRoute } from '@react-navigation/native';

// update page screen for phone number and email
const UpdateBioPage = props => {
  const route = useRoute();
  const rowId = route.params.rowId;

  const placeHolder = `Write a little bit about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? Etc.`;
  const [rowData, setRowData] = useState({
    data: '',
  });

  const handleRowDataChange = value => {
    setRowData(prevState => ({
      ...prevState,
      data: `${value}`,
    }));
  };
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
            maxLength={500}
            onChangeText={handleRowDataChange}
          />
        </View>
        <View style={styles.updateButton}>
          <UpdateButton rowInput={rowData} rowId={rowId} />
        </View>
      </View>
    </View>
  );
};

export default UpdateBioPage;
