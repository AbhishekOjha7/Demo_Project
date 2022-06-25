import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function SuperstarScreen() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontWeight:'bold',fontSize:40}}>{'Under Development'}</Text>
      </View>
    </SafeAreaView>
  )
}