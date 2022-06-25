import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';

export default function GridComponent({data, title,columns,width,height, imageHeight,imageWeight,marginBottom,marginTop,padding,margin,marginRight}) {
    const itemWidth = 370/(columns*1.03)
    const itemHeight = imageHeight *(itemWidth/imageWeight)

    const renderItems = ({item}) => {
    return (
      <View style={{justifyContent:'center',alignItems:'center',marginHorizontal:5}}>
        <Image source={{uri: item.url}} 
       style={{height:height??155, width:width??115,resizeMode:'contain',marginBottom:marginBottom??0,marginTop:marginTop??0,padding:padding??0,margin:margin??0,marginRight:marginRight??0,
 
       }} />
        <Text style={{margin:5}}>{item.footer?.title}</Text> 
       {item.footer?.subtitle ? <Text >{item.footer?.subtitle}</Text> : null}
       {/* <Text>{typeof(itemHeight)}</Text>
       <Text>{itemWidth}</Text> */}

        
      </View>
    );
  };
  return (
    <>
      <Text>{title}</Text>
      <FlatList data={data} renderItem={renderItems} numColumns={3} bounces={false} />
    </>
  );
}
