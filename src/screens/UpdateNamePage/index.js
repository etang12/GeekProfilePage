import React, {useState, useContext} from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from './styles';

import InputBox from '../../components/InputBox';
import UpdateButton from '../../components/UpdateButton';

const UpdateNamePage = props => {
  // manage 2 states
  // UpdateNamePage --> InputBox (pass function into InputBox to change text),InputBox --> UpdateNamePage (pass data back up)
  // UpdateNamePage --> UpdateButton (pass function into UpdateButton), UpdateButton --> UpdateNamePage (return boolean value if contentText changed)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [fullName, setFullName] = useState({
    firstName: '',
    lastName: '',
  });

  const route = useRoute();

  const handleFirstNameChange = value => {
    setFullName(prevState => ({
      ...prevState,
      firstName: `${firstName}${value}`,
    }));
  };

  const handleLastNameChange = value => {
    setFullName(prevState => ({
      ...prevState,
      lastName: `${lastName}${value}`,
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
          <UpdateButton fullName={fullName} rowId={1} />
        </View>
      </View>
    </View>
  );
};

export default UpdateNamePage;
