import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import {bottomTabNavigator} from './components/BottomTabNavigator';
import { AppDrawer } from './components/AppDrawer'

export default function App() {
  return (
    <AppContainer />
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  Drawer:{screen: AppDrawer},
  BottomTab: {screen: bottomTabNavigator}
})

const AppContainer = createAppContainer(switchNavigator)
