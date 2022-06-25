import { View, Text ,Image} from 'react-native'
import React from 'react'

export default function CategoryBanner({item}) {
  return (
   <View style={{padding:10}}>
       <Image
       style={{height: 200, width: 240}}
       source={{uri: item?.image_url}}
       />
       <Text style={{margin:8}}>{item.description}</Text>
   </View>
  )
}