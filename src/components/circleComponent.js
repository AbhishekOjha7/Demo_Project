import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import {images} from '../utils/images';
import {styles} from './style';
import {useSelector} from 'react-redux';

export default function circleComponent({src}) {
  const {Women_category} = useSelector(store => store.HomeReducer);
  const renderSlider = ({item}) => {
    return (
      <View>
        <LinearGradient
          colors={['#ffded8', '#ff512b']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={styles.circleview}>
          <TouchableOpacity>
            <View style={styles.inneimgview}>
              <Image source={{uri: item.image_url}} style={styles.innerimg} />
            </View>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={{textAlign: 'center'}}>{item.tag}</Text>
      </View>
    );
  };

  const _renderItem = ({item}) => {
    if (item.type == 'circleItemSlider') {
      return (
        <FlatList
          data={item.items}
          renderItem={renderSlider}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      );
    }
  };
  return (
    <>
      <FlatList
        data={src}
        renderItem={_renderItem}
        keyExtractor={item => item.tag}
      />
    </>
  );
}

