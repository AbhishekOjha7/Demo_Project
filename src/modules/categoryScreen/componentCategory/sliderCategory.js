import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function SliderCategory({data}) {
  const renderSliderData = ({item}) => {
  
    return (
      <View
        style={{
          marginHorizontal: 20,

          justifyContent: 'center',
          alignItems: 'center',
    marginLeft:15,
          maxWidth:60
        }}>
        <TouchableOpacity>
          <Image
            source={{uri: item?.image_url}}
            style={{height: 90, width: 90, borderRadius: 100}}
          />
        </TouchableOpacity>
        <Text>{item.label}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderSliderData}
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
    />
  );
}
