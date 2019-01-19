import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SelectScreen from '../screens/SelectScreen';
import FlowScreen from '../screens/FlowScreen';
import AboutScreen from '../screens/AboutScreen';
import AllPositionsScreen from '../screens/AllPositionsScreen';
import EmailScreen from '../screens/EmailScreen';

const RootStack = createStackNavigator(
  {
    Select: SelectScreen,
    Flow: FlowScreen,
    About: AboutScreen,
    AllPositions: AllPositionsScreen,
    Email: EmailScreen
  },
  { initialRouteName: 'Select' }
);

export default createAppContainer(RootStack);

// const Select = createStackNavigator({
//   Home: SelectScreen,
// });

// Select.navigationOptions = {
//   tabBarLabel: 'Select',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// };

// const Flow = createStackNavigator({
//   Links: FlowScreen,
// });

// Flow.navigationOptions = {
//   tabBarLabel: 'Flow',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//     />
//   ),
// };

// const About = createStackNavigator({
//   Settings: AboutScreen,
// });

// About.navigationOptions = {
//   tabBarLabel: 'About',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-information' : 'md-information'}
//     />
//   ),
// };

// export default createBottomTabNavigator({
//   Select,
//   Flow,
//   About,
// });
