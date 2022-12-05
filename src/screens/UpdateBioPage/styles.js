import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'column',
    marginHorizontal: 40,
    marginTop: 30,
    height: '100%',
  },
  textInput: {
    fontWeight: 'bold',
    fontSize: 17,
    marginHorizontal: 5,
    // paddingBottom: 15,
    // padding: 0,
    // margin: 0,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 40,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    height: 200,
  },
  updateButton: {
    marginTop: '50%',
  },
});

export default styles;
