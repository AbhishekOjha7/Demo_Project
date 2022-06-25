import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../../utils/images';

export default function HeaderComponent() {
  return (
    <View style={{flexDirection: 'row', marginTop: 10,justifyContent:'space-evenly'}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          borderRadius: 7,
          backgroundColor: '#DFDFDE',
          alignItems:'center',
          paddingHorizontal:20,
        }}>
        <Image style={{height: 25, width: 25,resizeMode:'contain'}} source={images.search} />
        <TextInput
          style={{ }}
          placeholder="search.."
          placeholderTextColor={'black'}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{
          flexDirection: 'row',
          borderRadius: 10,
          backgroundColor: 'black',
          alignItems:'center',
          paddingHorizontal:10,
          paddingVertical:5

        }}>
        <Image style={{height: 25, width: 25,tintColor:'white'}} source={images.bag} />
        <Text style={{color:'white'}}>{'Category'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
          flexDirection: 'row',
          borderRadius: 7,
          backgroundColor: '#DFDFDE',
          alignItems:'center',
          width:90,
          justifyContent:'center'
          
          

        }}>
      <Image style={{height: 25, width: 25}} source={images.brand} />
        <Text>{'Brands'}</Text>
      </TouchableOpacity>
    </View>
  );
}
