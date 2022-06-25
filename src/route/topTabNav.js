import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../modules/homeScreen';
// import CategoryScreen from '../modules/categoryScreen';
import RegisterScreen from '../modules/registerScreen';
import SuperstarScreen from '../modules/superstarScreen';
import WomenCategory from '../modules/womenCategory';
import MenCategory from '../modules/menCategory';
import KidsCategory from '../modules/kidsCtaegory';

const Tab = createMaterialTopTabNavigator();


export default function TopTabNav() {
  return (
<Tab.Navigator>
      <Tab.Screen name="Women" component={WomenCategory} />
      <Tab.Screen name="Men" component={MenCategory}/>
      <Tab.Screen name="kids" component={KidsCategory}/>
    </Tab.Navigator>
  )
}