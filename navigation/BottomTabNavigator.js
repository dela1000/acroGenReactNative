import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SelectScreen from '../screens/SelectScreen';
import FlowScreen from '../screens/FlowScreen';
import AboutScreen from '../screens/AboutScreen';


const Select = createStackNavigator({
  Home: SelectScreen,
});

Select.navigationOptions = {
  tabBarLabel: 'Select',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const Flow = createStackNavigator({
  Links: FlowScreen,
});

Flow.navigationOptions = {
  tabBarLabel: 'Flow',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const About = createStackNavigator({
  Settings: AboutScreen,
});

About.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-information' : 'md-information'}
    />
  ),
};

export default createBottomTabNavigator({
  Select,
  Flow,
  About,
});
