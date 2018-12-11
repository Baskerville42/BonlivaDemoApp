import React, { Component } from 'react';
import { ActivityIndicator, View, Text, FlatList } from 'react-native';

import OpenJobsListItemComponent from '../OpenJobsListItem';
import styles from './styles';

class OpenJobsListComponent extends Component {
  componentDidMount() {
    const {
      getList,
    } = this.props;

    getList();
  };

  render() {
    const {
      list,
      loading,
    } = this.props;

    if (!list || list.length === 0) return <Text>The List is empty :(</Text>;

    if (loading) return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );

    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={({item}) => <OpenJobsListItemComponent key={item.key} {...item} />}
        />
      </View>
    );
  };
}

export default OpenJobsListComponent;
