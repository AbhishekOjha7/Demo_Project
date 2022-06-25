import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import bottomTabNav from './bottomTabNav';
import topTabNav from './topTabNav';
const Stack = createNativeStackNavigator();
import {NavigationContainer} from '@react-navigation/native';
export default function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="topTabNav" component={topTabNav} /> */}
        <Stack.Screen name="bottomTabNav" component={bottomTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
