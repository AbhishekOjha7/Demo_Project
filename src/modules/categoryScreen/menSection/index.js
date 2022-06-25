import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../componentCategory/headerComponent';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import getCategoryAction from '../CategoryAction';
import {iteratorSymbol} from 'immer/dist/internal';
import CategoryBanner from '../componentCategory/categoryBanner';
import SliderCategory from '../componentCategory/sliderCategory';
import GridCategory from '../componentCategory/gridCategory';

export default function WomenSection() {
  const [indexItem, setIndexItem] = useState(0);

  const dispatch = useDispatch();
  const { Men_Category} = useSelector(store => store.CategoryReducer);

  useEffect(() => {
    dispatch(getCategoryAction('categories_men'));
  }, []);

  const onSetIndex = index => {
    setIndexItem(index);
  };
  const _renderItems = ({item, index}) => {
    console.log('items------->', item);
    return (
      <TouchableOpacity
        onPress={() => onSetIndex(index)}
        style={{
          padding: 10,
          height: 40,
          width: 130,
          backgroundColor:
            indexItem == index ? item.design.background_color : 'white',
        }}>
        <View>
          <Text
            style={{
              color: indexItem == index ? 'white' : item.design.text_color,
            }}>
            {item?.label.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderDataItem = ({item}) => {
    if (item?.type == 'banner') return <CategoryBanner item={item} />;
    else if (item?.type == 'slider') {
      return (
        <View>
          <Text style={{marginLeft: 20}}>{item.title}</Text>
          <SliderCategory data={item.items} />
        </View>
      );
    } else if (item?.type == 'grid') {
      return (
        <View style={{}}>
          <Text style={{margin: 10}}>{item.title}</Text>
          <GridCategory data={item.items} />
        </View>
      );
    }
  };

  return (
    <View style={styles.headerparent}>
      <HeaderComponent />
      <View style={styles.container}>
        <View style={styles.containerInner}>
          <View>
            <FlatList
              data={ Men_Category}
              renderItem={_renderItems}
              bounces={false}
            />
          </View>
        </View>
        <FlatList
          data={Men_Category[indexItem]?.data}
          renderItem={renderDataItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: 10,
  },
  containerInner: {
    borderRightWidth: 0.2,
    height: 630,
  },
  headerparent: {
    flex: 1,
    marginTop: 5,
  },
});
