import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import OpenJobsList from '../../Containers/OpenJobsList';

const OpenJobsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to OpenJobsScreen!</Text>

    <OpenJobsList />
  </View>
);

export default OpenJobsScreen;
