import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

type Props = {
  title: string,
  onPress: Function,
}

const Button = ({ title, onPress }: Props) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View>
      <View style={[styles.wrap]}>
        <Text style={styles.mainText}>{title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default Button;
