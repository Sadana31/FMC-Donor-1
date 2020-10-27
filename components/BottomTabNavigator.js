import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MedicineRequestScreen from '../screens/MedicineRequestScreen';
import ClothesRequestScreen from '../screens/ClothesRequestScreen';
import FoodRequestScreen from '../screens/FoodRequestScreen';
import DonateScreen from '../screens/DonateScreen';

export const bottomTabNavigator = createBottomTabNavigator({
  MedicineRequestScreen : {
    screen: MedicineRequestScreen,
    navigationOptions :{
      tabBarLabel : "Medicine",
    }
  },
  ClothesRequestScreen : {
    screen: ClothesRequestScreen,
    navigationOptions :{
      tabBarLabel : "Clothes",
    }
  },
  FoodRequestScreen : {
    screen: FoodRequestScreen,
    navigationOptions :{
      tabBarLabel : "Food",
    }
  },
  DonateScreen : {
    screen: DonateScreen,
    navigationOptions :{
      tabBarLabel : "Donate Items",
    }
  },
});