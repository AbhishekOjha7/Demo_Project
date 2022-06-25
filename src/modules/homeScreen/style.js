import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainParent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth:1,
    // borderColor:'red'
  },
  sixstreetlogo: {
    height: 35,
    width: '50%',
    marginLeft: 100,
  },
  belllog: {
    height: 30,
    width: 25,
  },
  baglogo: {
    height: 30,
    width: 25,
    marginRight: 12,
  },
  txtinput: {
    flex: 1,
    marginLeft: 10,
  },
  SearchBarViewStyle: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#DFDFDE',
    marginHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  search:{
    height: 25, width: 25
  }
});

export {styles};
