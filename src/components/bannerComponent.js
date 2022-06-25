import { View, Text, FlatList,Image } from 'react-native'
import React from 'react'

export default function BannerComponent(data) {
     const renderItembanner=(item)=>{
        return(
        <Image
        source={{uri: item.item.url}}
          style={{height: 400, width: 370, resizeMode: 'contain'}}
        />
    
      )
     }
  return (
    <>
    <FlatList
    data={data.data}
    renderItem={renderItembanner}
    bounces={false}
    showsHorizontalScrollIndicator={false}
    />
    </>
  )
}