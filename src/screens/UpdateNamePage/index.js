import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import styles from './styles';
import InputBox from '../../components/InputBox';
import UpdateButton from '../../components/UpdateButton';

const UpdateNamePage = () => {
  const route = useRoute();
  const rowId = route.params.rowId;

  const [fullName, setFullName] = useState({
    firstName: '',
    lastName: '',
  });

  const handleFirstNameChange = value => {
    setFullName(prevState => ({
      ...prevState,
      firstName: `${value}`,
    }));
  };

  const handleLastNameChange = value => {
    setFullName(prevState => ({
      ...prevState,
      lastName: `${value}`,
    }));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>What's your name?</Text>
        <View style={styles.inputContainer}>
          <InputBox
            info={{name: 'First Name'}}
            onTextChange={handleFirstNameChange}
          />
          <InputBox
            info={{name: 'Last Name'}}
            onTextChange={handleLastNameChange}
          />
        </View>
        <View style={styles.updateButton}>
          <UpdateButton rowInput={fullName} rowId={rowId} />
        </View>
      </View>
    </View>
  );
};

export default UpdateNamePage;
