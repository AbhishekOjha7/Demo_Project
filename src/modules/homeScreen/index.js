import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {images} from '../../utils/images';
import getHomeAction from './homeAction';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import TopTabNav from '../../route/topTabNav';
import {styles} from './style';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.mainParent}>
      <View style={styles.headerview}>
        <Image style={styles.sixstreetlogo} source={images.logo} />
        <TouchableOpacity>
          <Image style={styles.belllog} source={images.bellring} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.baglogo} source={images.bag} />
        </TouchableOpacity>
      </View>
      <View style={styles.SearchBarViewStyle}>
        <Image style={styles.search} source={images.search} />

        <TextInput
          style={styles.txtinput}
          placeholder="What are you looking for?"
          placeholderTextColor={'black'}
        />
        <Image style={styles.search} source={images.microphone} />
      </View>
      <TopTabNav />
    </SafeAreaView>
  );
}
