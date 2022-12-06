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
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 40,
  },
  updateButton: {
    position: 'absolute',
    width: '100%',
    bottom: 350,
  },
});

export default styles;
