import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WomenSection from '../modules/categoryScreen/womensection'
import MenSection from '../modules/categoryScreen/menSection'
import KidSection from '../modules/categoryScreen/kidssection'
const Tab = createMaterialTopTabNavigator();

export default function CategoryTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Women" component={WomenSection} />
      <Tab.Screen name="Men" component={MenSection}/>
      <Tab.Screen name="kids" component={KidSection}/>
    </Tab.Navigator>
  )
}