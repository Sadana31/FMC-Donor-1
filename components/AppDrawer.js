import * as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { BottomTabNavigator } from './BottomTabNavigator';
import ReceivedItems from "../screens/ReceivedItems";
import NotificationsScreen from "../screens/NotificationsScreen";
import SettingsScreen from "../screens/SettingsScreen";

export const AppDrawer = createDrawerNavigator({
    Home: {
        screen: BottomTabNavigator,
        navigationOptions: {
            title: "Home",
            drawerLabel: <Icon type="home" color="grey"/>
        }
    },
    ReceivedItems: {
        screen: ReceivedItems,
        navigationOptions: {
            title: "My Received Items",
            drawerLabel: <Icon type="gift" color="grey"/>
        }
    },
    Notifications: {
        screen: NotificationsScreen,
        navigationOptions: {
            title: "HOME",
            drawerLabel: <Icon type="bell" color="grey"/>
        }
    },
})
