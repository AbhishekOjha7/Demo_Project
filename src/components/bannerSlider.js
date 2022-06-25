import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';

export default function BannerSlider({data,height,width}) {
  const renderItemslider = ({item}) => {

    return (
      <View style={{marginHorizontal:5,justifyContent:'center',alignItems:'center'}}>
        <Image
          source={{uri: item.url}}
          style={{height: height??300, width:width?? 180, resizeMode: 'contain'}}
        />
      
      </View>
    );
  };

  return <FlatList data={data} renderItem={renderItemslider} horizontal bounces={false}
  showsHorizontalScrollIndicator={false}/>;
}
