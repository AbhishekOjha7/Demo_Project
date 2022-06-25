import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';

export default function KidsGrid({data, height, width}) {
  const renderItemskidsGrid = ({item}) => {


    <View>
      <Image
        source={{uri: item.url}}
        style={{
          height: height ?? 100,
          width: width ?? 100,
          resizeMode: 'contain',
        }}
      />
    </View>;
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItemskidsGrid}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
    />
  );
}
