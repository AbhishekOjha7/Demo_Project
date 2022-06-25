import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CategoryTab from '../../route/categoryTab.js'
import HeaderComponent from './componentCategory/headerComponent.js'

export default function CategoryScreen() {
  return (
    <SafeAreaView style={{flex:1}}>
      
   <CategoryTab/>
  
    </SafeAreaView>
 
  )
}