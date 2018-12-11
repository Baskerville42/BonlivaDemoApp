import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 125,
    height: 250,
    marginRight: 20,
  },
  content: {
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    marginBottom: 5,
  },
  subTitle: {
    marginBottom: 15,
    flexDirection: 'row',
  },
  company: {
    fontSize: 16,
    color: '#000000',
    marginRight: 5,
  },
  city: {
    fontSize: 16,
    color: '#878787',
  },
  stats: {
    flexDirection: 'row',
  },
  statsItem: {
    fontWeight: 'bold',
    marginRight: 20,
  },
});
