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

export default function MenCategory() {
  const dispatch = useDispatch();
  const {Men_Section} = useSelector(store => store.HomeReducer);

  useEffect(() => {
    dispatch(getHomeAction('men'));
  }, []);

  const renderItems = ({item}) => {
    if (item.type == 'circleItemSlider') {
      return <CircleComponent src={Men_Section
  } />;
    } else if (item.type == 'banner' && item.items[0].height == 125) {
      return (
        <TouchableOpacity>

          <Image
            source={{uri: item.items[0].url}}
            style={styles.buy}
          />
        </TouchableOpacity>
      );
    } else if (item.type == 'fullWidthBannerSlider') {
      return <Fullbanner data={item.items} />;
    } else if (
      item.type === 'banner' &&
      item.items.tag == 'FreshStyle-header Updated'
    ) {
      return (
        <Image
          source={{uri: item.items[0].url}}
          style={styles.juneoff}
        />
      );
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
    else if (
      item.type == 'banner' &&
      item.tag == 'FreshStyle-header' 
    ) {
      return (
        <>
          <Image
            source={{uri: item.items[0].url}}
            style={styles.freshheader}
          />
        </>
      );
    } else if (
      item.type == 'bannerSliderWithLabel' &&
      item.tag == 'FreshStyle-Updated Version'
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
    } 
    else if (
      item.type == 'banner' &&
      item.tag == 'Campaign Spot-EOSS'
    ) {
      return (
        <Image
          source={{uri: item.items[0].url}}
          style={{height: 250, width: 370, resizeMode: 'contain'}}
        />
      );
    }
    
    else if (item.type == 'grid' && item.tag == 'SBC-Grid-May') {
      return(

        <View>
   <Text style={{marginTop:10}}>{item.header.title}</Text>
<GridComponent

data={item.items}

/>
        </View>
      )
    }
        
    else if (
      item.type == 'banner' &&
      item.tag == 'Campaign Spot-Get Eid ready'
    ) {
      return (
        <>
          <Image
            source={{uri: item.items[0].url}}
            style={{height: 320, width: 370, resizeMode: 'stretch'}}
          />
        </>
      );
    } 
    
    else if (
      item.type == 'banner' &&
      item.tag == 'Style Edit-Updated'
    ) {
      return (

        <View style={{marginTop:7}}>

          <Image
            source={{uri: item.items[0].url}}
            style={{height: 400, width: 370}}
          />
        </View>
      );
    }
    
    
    else if (item.type == 'grid' && item.tag == 'Style Edit-Grid Updated') {
      return (
        <>
          <GridComponent data={item.items} width={177} height={250} />
        </>
      );
    } 
  
    else if (
      item.type == 'banner' &&
      item.tag == 'Shopping guide-Header'
    ) {
      return (
        <Image
          source={{uri: item.items[0].url}}
          style={{height: 100, width: 370,resizeMode:'contain'}}
        />
      );
    }


     
    else if (item.type == 'grid' && item.tag == 'Shopping Guide-Updated 1') {
      return (
        <>
          <GridComponent data={item.items} width={175} height={240} />
        </>
      );
    } 

       
    else if (item.type == 'grid' && item.tag == 'Shopping Guide-Updated 2') {
      return (
        <>
          <GridComponent data={item.items} width={175} height={240} />
        </>
      );
    } 

    else if (
      item.type == 'banner' &&
      item.tag == 'Top Brands-header'
    ) {
      return (
        <Image
          source={{uri: item.items[0].url}}
          style={{height: 100, width: 360}}
        />
      );
    }

  else if (item.type == 'grid' && item.tag == 'Top Brands-Grid') {
      return (
        <>
          <GridComponent data={item.items} />
        </>
      );
    } 



    

     
    else if (
      item.type == 'grid' &&
      item.tag == 'Shop by shoe size-Grid'
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
    }


     else if (
      item.type == 'banner' &&
      item.tag == 'Exclusive-header'
    ) {
      return (
        <View>
          
          <Image
            source={{uri: item.items[0].url}}
            style={{width: 360, height: 150}}
          />
        </View>
      );
    } 
    
    
    else if (item.type == 'grid' && item.tag == 'Exclusive GRID') {
      return (
        <View style={{marginRight:10}}>
          <GridComponent data={item.items}
          width={180}
          height={250}

          />
        </View>
      );
    } 
    
    
    else if (
      item.type == 'grid' &&
      item.tag == 'Home-Lucky Clothing Sizes-June'
    ) {
      return (
        <>
          <Text style={{margin: 5}}> {item.header.title.toUpperCase()} </Text>
          <GridComponent data={item.items} width={114} height={80} />
        </>
      );
    } 
    else if (item.type == 'grid' && item.tag == 'SBC-Kids-June') {
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
    }
     else if (
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
    } 

    else if (
      item.type == 'grid' &&
      item.tag == 'Shop by clothing sizes-Grid'
    ) {
      return (
        <>
          <Text style={{margin: 5}}> {item.header.title.toUpperCase()} </Text>
          <GridComponent data={item.items} width={114} height={80} />
        </>
      );
    } 

    else if (
      item.type == 'banner' &&
      item.tag == 'Premium-header'
    ) {
      return (
        <View>
          <Image
            style={{height: 165, width: 370, resizeMode: 'contain'}}
            source={{uri: item.items[0].url}}
          />
        </View>
      );
    } 


    else if (
      item.type == 'banner' &&
      item.tag == 'Home-BauSale-Premium - Up to 50% Off'
    ) {
      return (
        <View>
          <Image
            style={{height: 165, width: 370, resizeMode: 'contain'}}
            source={{uri: item.items[0].url}}
          />
        </View>
      );
    }


    else if (
      item.type == 'grid' &&
      item.tag == 'The Premium Edit'
    ) {
      return (
        <>

          <GridComponent data={item.items} width={115} height={165} />
        </>
      );
    } 
    
    
    
    
    


    
   
    
    else if (item.type == 'grid' && item.tag == 'Explore more-New Version') {
      return (
        <View>
          <Text style={{}}>{item.header.title.toUpperCase()}</Text>
          <ExploreComponent data={item.items} />
        </View>
      );
    }
  };

  return (
    <View style={styles.WomenScreenContainer}>
      <FlatList
        style={{paddingHorizontal: 10}}
        data={Men_Section
    }
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
  buy:{
    height: 50, resizeMode: 'contain'
  },
  juneoff:{
    height: 400, width: 370, resizeMode: 'contain'
  },
  freshheader:{
    width: 350, height: 120
  }
});
