import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 19,
  },
  defaultLabel: {
    color: '#000000',
    marginBottom: 14,
    fontSize: 14,
    fontWeight: '500',
  },
  errorLabel: {
    backgroundColor: '#FF0000',
    position: 'absolute',
    top: 0,
    right: 0,
    paddingHorizontal: 11,
    paddingVertical: 9,
    paddingBottom: 16,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  errorLabelText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  defaultTextInput: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 6,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputWithError: {
    borderWidth: 2,
    borderColor: '#FF0000',
    backgroundColor: '#FFFFFF',
  },
});
