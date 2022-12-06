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
    color: '#4169e1',
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
    borderColor: '#4169e1',
  },
  editIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    top: 25,
    right: -5,
    borderRadius: 18,
    width: 35,
    height: 35,
  },
});

export default styles;
