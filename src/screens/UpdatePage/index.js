import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import styles from './styles';
import InputBox from '../../components/InputBox';
import UpdateButton from '../../components/UpdateButton';

const UpdatePage = props => {
  const route = useRoute();
  const [rowData, setRowData] = useState({
    data: '',
  });

  const handleRowDataChange = value => {
    setRowData(prevState => ({
      ...prevState,
      data: `${value}`,
    }));
  };

  const selectedRowId = route.params.rowId;
  const title =
    selectedRowId === 2 ? "What's your phone number?" : "What's your email?";
  const label =
    selectedRowId === 2 ? 'Your phone number' : 'Your email address';

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputContainer}>
          <InputBox info={{name: label}} onTextChange={handleRowDataChange} />
        </View>
        <View style={styles.updateButton}>
          <UpdateButton rowInput={rowData} rowId={selectedRowId} />
        </View>
      </View>
    </View>
  );
};

export default UpdatePage;
