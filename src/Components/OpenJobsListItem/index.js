import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const OpenJobsListItemComponent = props => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: props.image }} />
    <View style={styles.content}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.subTitle}>
        <Text style={styles.company}>{props.company}</Text>
        <Text style={styles.city}>{props.city}</Text>
      </View>
      <View style={styles.stats}>
        <Text style={styles.statsItem}>{props.salary}</Text>
        <Text style={styles.statsItem}>{`${props.companyRate}★`}</Text>
        <Text style={styles.statsItem}>{props.counter}</Text>
      </View>
    </View>
  </View>
);

export default OpenJobsListItemComponent;
