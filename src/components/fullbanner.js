import { View, Text,Image,FlatList } from 'react-native'
import React from 'react'
import { SwiperFlatList } from 'react-native-swiper-flatlist';

export default function Fullbanner({data}) {
    const renderItemfullbanner=({item})=>{

        
        return(
        <Image
        source={{uri: item.url}}
          style={{height: 400, width: 370, resizeMode: 'contain'}}
        />
    
      )
     }
  return (
    <SwiperFlatList 
    autoplay
      autoplayDelay={2}
      autoplayLoop
    data={data} renderItem={renderItemfullbanner} horizontal/>
  )
}