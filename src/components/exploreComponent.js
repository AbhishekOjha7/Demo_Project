import { View, Text, FlatList,Image } from 'react-native'
import React from 'react'

export default function ExploreComponent({data}) {

    const renderItemExplore=({item})=>{
     return(
         <View style={{padding:6,right:7}}>
             <Image
             source={{uri:item.url}}
             style={{height:75,width:180,resizeMode:'contain'}}
             />
         </View>
     )
    }
  return (
    
    <FlatList
    
    data={data}
    renderItem={renderItemExplore}
    numColumns={2}
    bounces={false}
    showsHorizontalScrollIndicator={false}
    />

  )
}