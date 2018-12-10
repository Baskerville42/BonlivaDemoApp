import React from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import LoginFormComponent from '../../Containers/LoginForm';

const LoginScreen = () => (
  <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <Text style={styles.welcome}>Credentials</Text>
      <Text style={styles.instructions}>user@example.com/qwe123!</Text>
      <LoginFormComponent />
    </View>
  </KeyboardAwareScrollView>
);

export default LoginScreen;
