import React from 'react';

import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import LoginScreen from '../Screens/Login'
import OpenJobsScreen from '../Screens/OpenJobs'

const AuthStack = createSwitchNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'LoginScreen',
  },
);

const AppStack = createBottomTabNavigator(
  {
    OpenJobsScreen: {
      screen: OpenJobsScreen,
    },
  }
);

const RootStack = createSwitchNavigator(
  {
    AuthStack: {
      screen: AuthStack,
    },
    AppStack: {
      screen: AppStack,
    },
  },
  {
    initialRouteName: 'AuthStack',
  },
);

export default createAppContainer(RootStack)
