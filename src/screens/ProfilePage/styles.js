import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  profileImage: {
    width: 155,
    height: 155,
    borderRadius: 100,
    borderWidth: 7,
    borderColor: '#4267B2',
    overflow: 'hidden',
    resizeMode: 'cover',
    marginTop: 20,
  },
  editIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    top: 40,
    right: 5,
    borderRadius: 100,
    width: 35,
    height: 35,
  },
  fields: {
    flexDirection: 'column',
  },
});

export default styles;
