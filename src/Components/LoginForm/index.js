import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import TextInputComponent from '../Commons/TextInput';
import Button from '../Commons/Button';


class LoginFormComponent extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = (fieldName, value) => this.setState({ [fieldName]: value });

  handleSubmitButton = () => {
    const {
      email,
      password,
    } = this.state;

    const {
      submitForm,
    } = this.props;

    submitForm({ email, password });
  };

  render() {
    const {
      email,
      password,
    } = this.state;

    return (
      <View style={styles.container}>
        <TextInputComponent
          label="Email"
          onChangeText={value => this.handleInputChange('email', value)}
          value={email}
          type="email"
          textContentType="emailAddress"
          placeholder="Email address"
        />
        <TextInputComponent
          label="Password"
          onChangeText={value => this.handleInputChange('password', value)}
          value={password}
          type="password"
          textContentType="password"
          placeholder="Password here"
        />
        <Button title="Login" onPress={this.handleSubmitButton} />
      </View>
    );
  };
}

export default LoginFormComponent;
