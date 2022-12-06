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
  editProfileTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4267B2',
    marginBottom: 15,
  },
  imageViewContainer: {
    height: 150,
    width: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#4267B2',
    // overflow: 'hidden',
    // resizeMode: 'cover',
    // marginTop: 20,
    // marginBottom: 40,
  },
  editIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    top: 25,
    right: -5,
    borderRadius: 100,
    width: 35,
    height: 35,
    zIndex: 99999,
  },
  fields: {
    flexDirection: 'column',
  },
});

export default styles;
