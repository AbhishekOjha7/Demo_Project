import { View, Text, FlatList,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'

export default function GridCategory({data,height,width}) {
 const _renderGrid=({item})=>{
     return(
         <View style={{marginHorizontal:6,justifyContent:'center',alignItems:'center'}}>
             <TouchableOpacity>

            <Image source={{uri:item?.image_url}}
            style={{height:height??75,width:width??75,borderRadius:100,resizeMode:'contain'}}
            />
             </TouchableOpacity>
            <Text>{item.label}</Text>
         </View>
     )
 }

  return (
   <FlatList
   data={data}
   renderItem={_renderGrid}
   numColumns={3}
   />
  )
}