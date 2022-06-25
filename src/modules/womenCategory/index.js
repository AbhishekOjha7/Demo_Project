import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import {images} from '../../utils/images';
import CircleComponent from '../../components/circleComponent';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import getHomeAction from '../homeScreen/homeAction';
import BannerSlider from '../../components/bannerSlider';
import Fullbanner from '../../components/fullbanner';
import GridComponent from '../../components/gridComponent';
import ExploreComponent from '../../components/exploreComponent';

export default function WomenCategory() {
  const dispatch = useDispatch();
  const {Women_Section} = useSelector(store => store.HomeReducer);

  useEffect(() => {
    dispatch(getHomeAction('women'));
  }, []);

  const renderItems = ({item}) => {
    if (item.type == 'circleItemSlider') {
      return <CircleComponent src={Women_Section} />;
    } else if (item.type == 'banner' && item.items[0].height == 125) {
      return (
        <TouchableOpacity>
          <Image source={{uri: item.items[0].url}} style={styles.buy} />
        </TouchableOpacity>
      );
    } else if (item.type == 'fullWidthBannerSlider') {
      return <Fullbanner data={item.items} />;
    } else if (
      item.type == 'banner' &&
      item.items[0].tag == 'Hero-EOSS June-30-70% Off'
    ) {
      return <Image source={{uri: item.items[0].url}} style={styles.juneoff} />;
    } else if (item.type == 'grid' && item.tag == 'SBB-EOSS June-Grid') {
      return (
        <View style={{alignItems: 'center'}}>
          <GridComponent
            title={item.header?.title != null ? item.header?.title : null}
            data={item.items}
          />
        </View>
      );
    } else if (item.type == 'grid' && item.tag == 'SBB-EOSS June-Grid') {
      return <GridComponent data={item.items} />;
    } else if (
      item.type == 'grid' &&
      item.tag == 'Home-SBC-EOSS June-Grid-new'
    ) {
      return (
        <GridComponent
          title={item.header.title != null ? item.header.title : null}
          data={item.items}
        />
      );
    } else if (item.type == 'grid' && item.tag == 'Home-SBC-EOSS June-Grid-new')
      return <GridComponent data={item.items} />;
    else if (item.type == 'banner' && item.tag == 'FreshStyle-header') {
      return (
        <>
          <Image source={{uri: item.items[0].url}} style={styles.freshheader} />
        </>
      );
    } else if (
      item.type == 'bannerSliderWithLabel' &&
      item.tag == 'Home-FreshStyle-May'
    ) {
      return <BannerSlider data={item.items} />;
    } else if (item.type == 'banner' && item.tag == 'EOSS-Campaign Spot-June') {
      return (
        <Image
          source={{uri: item.items[0].url}}
          style={{height: 290, width: 370}}
        />
      );
    } else if (item.type == 'grid' && item.tag == 'SBC-Grid-June-1') {
      return (
        <View style={{marginTop: 15}}>
          <Text>{item.header.title.toUpperCase()}</Text>
          <GridComponent data={item.items} />
        </View>
      );
    } else if (
      item.type == 'banner' &&
      item.tag == 'Campaign Spot-Get eid ready'
    ) {
      return (
        <Image
          source={{uri: item.items[0].url}}
          style={{height: 250, width: 370, resizeMode: 'contain'}}
        />
      );
    } else if (
      item.type == 'banner' &&
      item.tag == 'Home-Style Edit-June-New'
    ) {
      return (
        <>
          <Text style={{letterSpacing: 1, padding: 5}}>
            {item.header.title.toUpperCase()}
          </Text>
          <Image
            source={{uri: item.items[0].url}}
            style={{height: 350, width: 370, resizeMode: 'stretch'}}
          />
        </>
      );
    } else if (item.type == 'grid' && item.tag == 'Style Edit-Grid-June') {
      return (
        <>
          <GridComponent data={item.items} width={177} height={250} />
        </>
      );
    } else if (
      item.type == 'banner' &&
      item.tag == 'Home-Shopping Guide-header-june'
    ) {
      return (
        <Image
          source={{uri: item.items[0].url}}
          style={{height: 100, width: 370}}
        />
      );
    } else if (
      item.type == 'banner' &&
      item.tag == 'Home-Top brands header-June'
    ) {
      return (
        <Image
          source={{uri: item.items[0].url}}
          style={{height: 80, width: 370}}
        />
      );
    } else if (item.type == 'grid' && item.tag == 'Home-Shopping Guide-June') {
      return (
        <GridComponent
          title={item.header != null ? item.header : null}
          data={item.items}
        />
      );
    } else if (item.type == 'grid' && item.tag == 'Home -Top Brands-20thJune') {
      return (
        <>
          <Text>{item.header?.title}</Text>
          <GridComponent data={item.items} />
        </>
      );
    } else if (
      item.type == 'grid' &&
      item.tag == 'Home-Lucky Shoe Sizes-June'
    ) {
      return (
        <View style={{}}>
          <>
            <Text style={styles.headerTextStyle}>
              {item.header.title.toUpperCase()}
            </Text>
            <GridComponent data={item.items} width={114} height={80} />
          </>
        </View>
      );
    } else if (
      item.type == 'banner' &&
      item.tag == 'Campaign spot-Summer Edit'
    ) {
      return (
        <View>
          <Text style={{margin: 8}}>{item.header.title.toUpperCase()}</Text>
          <Image
            source={{uri: item.items[0].url}}
            style={{width: 370, height: 200}}
          />
        </View>
      );
    } else if (item.type == 'grid' && item.tag == 'The Beauty Store-May-New1') {
      return (
        <View>
          <GridComponent data={item.items} />
        </View>
      );
    } else if (
      item.type == 'grid' &&
      item.tag == 'Home-Lucky Clothing Sizes-June'
    ) {
      return (
        <>
          <Text style={{margin: 5}}> {item.header.title.toUpperCase()} </Text>
          <GridComponent data={item.items} width={114} height={80} />
        </>
      );
    } else if (item.type == 'grid' && item.tag == 'SBC-Kids-June') {
      return (
        <>
          <Text>{item.header.title.toUpperCase()}</Text>
          <GridComponent
            data={item.items}
            margin={9}
            width={100}
            height={120}
            marginRight={4}
          />
        </>
      );
    } else if (
      item.type == 'banner' &&
      item.tag == 'Home-Exclusive header-June'
    ) {
      return (
        <View>
          <Image
            style={{height: 165, width: 370, resizeMode: 'contain'}}
            source={{uri: item.items[0].url}}
          />
        </View>
      );
    } else if (
      item.type == 'bannerSliderWithLabel' &&
      item.tag == "Influencer's Choice NEW"
    ) {
      return (
        <View>
          <BannerSlider data={item.items} height={200} width={150} />
        </View>
      );
    } else if (
      item.type == 'banner' &&
      item.tag == "Influencer's choice-Banner-May-View All"
    ) {
      return (
        <View style={{alignItems: 'center'}}>
          <Image source={{uri: item.items[0].url}} style={styles.bannerinfl} />
        </View>
      );
    } else if (
      item.type == 'banner' &&
      item.tag == 'Home-Premium header-June'
    ) {
      return (
        <>
          <Image
            source={{uri: item.items[0].url}}
            style={styles.bannerpremium}
          />
        </>
      );
    } else if (
      item.type == 'banner' &&
      item.tag == 'Home-PremiumEdit-banner-Tommy Hilfiger-May'
    ) {
      return (
        <>
          <Image source={{uri: item.items[0].url}} style={styles.tommy} />
        </>
      );
    } else if (item.type == 'grid' && item.tag == 'Home-PremiumEdit-Grid-May') {
      return <GridComponent data={item.items} height={160} />;
    } else if (item.type == 'grid' && item.tag == 'Home-Explore more-June') {
      return (
        <View>
          <Text>{item.header.title.toUpperCase()}</Text>
          <ExploreComponent data={item.items} />
        </View>
      );
    }
  };

  return (
    <View style={styles.WomenScreenContainer}>
      <FlatList
        style={{paddingHorizontal: 10}}
        data={Women_Section}
        renderItem={renderItems}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  WomenScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  buy: {
    height: 50,
    resizeMode: 'contain',
  },
  juneoff: {
    height: 400,
    width: 370,
    resizeMode: 'contain',
  },
  freshheader: {
    width: 350,
    height: 120,
  },
  tommy: {
    height: 180,
    width: 370,
  },
  bannerpremium: {
    height: 170,
    width: 380,
  },
  bannerinfl: {
    height: 30,
    width: 170,
    marginTop: 8,
  },
  exlusivebanner: {},
});
