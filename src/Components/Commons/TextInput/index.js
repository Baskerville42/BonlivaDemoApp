import React, { PureComponent } from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';

import styles from './styles';

type Props = {
  label: string,
  type?: string,
  hasError?: boolean,
  errorText?: string,
  onChangeText: Function,
  value?: string,
  placeholder?: string,
  textContentType?: string,
}

class TextInputComponent extends PureComponent<Props> {
  static defaultProps = {
    hasError: false,
    errorText: '',
    value: '',
    type: 'text',
    placeholder: '',
    textContentType: 'none',
  };

  state = {
    inputTypeProperties: {},
  };

  componentDidMount() {
    this.setInputType();
  }

  setInputType = () => {
    const { type } = this.props;
    const passwordConfig = {
      autoCorrect: false,
      spellCheck: false,
      keyboardType: 'default',
      autoCapitalize: 'none',
      secureTextEntry: true,
    };

    switch (type) {
      case 'password':
        this.setState({
          inputTypeProperties: {
            ...passwordConfig,
          },
        });
        break;
      case 'number':
        this.setState({
          inputTypeProperties: {
            keyboardType: 'numeric',
          },
        });
        break;
      case 'email':
        this.setState({
          inputTypeProperties: {
            autoCorrect: false,
            spellCheck: false,
            keyboardType: 'email-address',
            autoCapitalize: 'none',
          },
        });
        break;
      default:
        this.setState({
          inputTypeProperties: {
            autoCorrect: true,
            spellCheck: true,
            keyboardType: 'default',
            autoCapitalize: 'sentences',
          },
        });
    }
  };

  render() {
    const {
      label,
      hasError,
      value,
      onChangeText,
      placeholder,
      textContentType,
      errorText,
    } = this.props;

    const {
      inputTypeProperties,
    } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.defaultLabel}>{label}</Text>

        {hasError && errorText.length !== 0 && (
          <View style={styles.errorLabel}>
            <Text style={styles.errorLabelText}>{errorText}</Text>
          </View>
        )}

        <TextInput
          onChangeText={onChangeText}
          style={[styles.defaultTextInput, hasError && styles.textInputWithError]}
          value={value}
          placeholder={placeholder}
          textContentType={textContentType}
          underlineColorAndroid="transparent"
          {...inputTypeProperties}
        />
      </View>
    );
  }
}

export default TextInputComponent;
