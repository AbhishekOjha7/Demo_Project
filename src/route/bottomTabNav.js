import { View, Text ,Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import homeScreen from '../modules/homeScreen';
// import categoryScreen from '../modules/categoryScreen';
import superstarScreen from '../modules/superstarScreen';
import wishlistScreen from '../modules/wishlistScreen';
import registerScreen from '../modules/registerScreen';
import { images } from '../utils/images';
import CategoryScreen from '../modules/categoryScreen/categoryScreen';

const Tab=createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel: false,}}>

      <Tab.Screen name="home" component={homeScreen}
        options={{
            tabBarIcon: ({ focused }) => {
                return (
                    <Image style={{ height: 25, width: 25, }}
                        source={!focused ? images.home:images.homeactive } />
                )
            },
            
        }}
        
      />
      <Tab.Screen name="category" component={CategoryScreen}
       options={{
        tabBarIcon: ({ focused }) => {
            return (
                <Image style={{ height: 25, width: 25, }}
                    source={!focused ? images.category:images.categoryactive } />
            )
        },
    
    }}
      />
      <Tab.Screen name="superstar" component={superstarScreen}
       options={{
        tabBarIcon: ({ focused }) => {
            return (
                <Image style={{ height: 25, width: 25, }}
                    source={!focused ? images.influencer:images.influencersuper } />
            )
        },
    
    }}
      />
      <Tab.Screen name="wishlist" component={wishlistScreen}
       options={{
        tabBarIcon: ({ focused }) => {
            return (
                <Image style={{ height: 25, width: 25, }}
                    source={!focused ? images.wishlist:images.wishlistactive } />
            )
        },
    
    }}
      />
      <Tab.Screen name="register" component={registerScreen}
       options={{
        tabBarIcon: ({ focused }) => {
            return (
                <Image style={{ height: 25, width: 25, }}
                    source={!focused ? images.account:images.accountactive} />
            )
        },
    
    }}
      />
    </Tab.Navigator>
  )
}