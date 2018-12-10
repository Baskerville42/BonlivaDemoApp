/** @format */

import React from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import { Provider } from 'react-redux';

import {name as appName} from './app.json';
import Store from './src/Configs/Store';
import RootStack from './src/Configs/Navigator';
import NavigationService from './src/Services/Navigation';

YellowBox.ignoreWarnings(['unknown call: "relay:check"']);

const App = () => (
  <Provider store={Store}>
    <RootStack ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)} />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
