import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
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
});

export default styles;
