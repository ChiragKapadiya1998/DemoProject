import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image as Images,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import Image from 'react-native-image-progress';

import Header from '../../components/common/Header';
import AuthBackground from '../../components/auth/AuthBackground';
import {colors, icons} from '../../helper/utils';
import {hp, wp} from '../../helper/constants';
import {ActivityIndicator} from 'react-native-paper';
import {getDataRequest} from '../../action/dataAction';

const NoDataFound = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(10),
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>No data found</Text>
      <Text>Please Search the news ...</Text>
    </View>
  );
};

const HomeScreen = ({}) => {
  const [searchWord, setSearchWord] = useState('sport');
  const [isFound, setIsFound] = useState(true);

  const dispatch = useDispatch();

  const DATA = useSelector(state => state.dataReducer.arr);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeSearch = search => setSearchWord(search);

  const onSearchPress = () => {
    getUserData();
  };

  const getUserData = () => {
    const request = {
      data: {
        query: searchWord,
      },
      onSuccess: response => console.log('response at homeScreen', response),
      onFail: response => {
        setIsFound(false);
        console.log(response);
      },
    };
    dispatch(getDataRequest(request));
  };

  useEffect(() => {
    getUserData();
  }, []);

  const renderItem = ({item}) => {
    // console.log('item', item);
    fetch(item.urlToImage)
      .then(result => setIsLoading(false))
      .catch(err => console.log(err));
    return (
      <View style={styles.cardWrapper}>
        {/* <Text style={{color:colors.black,marginTop:10}}>Id : {item.id}</Text> */}
        <Text style={{color: colors.black, marginTop: 10}}>
          author: {item.author}
        </Text>
        <Text style={{color: colors.black, marginTop: 10}}>
          content : {item.content}
        </Text>
        <Text style={{color: colors.black, marginTop: 10}}>
          description : {item.description}
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <Text style={{color: colors.blue, marginTop: 10}}>
            url : {item.url}
          </Text>
        </TouchableOpacity>
        {isLoading === true ? (
          <ActivityIndicator size={'small'} animating={true} />
        ) : (
          <TouchableOpacity
            style={{
              alignSelf: 'center',
            }}>
            <Image
              source={{uri: item.urlToImage}}
              style={{height: 180, width: 180, marginVertical: 12}}
            />
          </TouchableOpacity>
        )}

        <Text style={{color: colors.black, marginTop: 10}}>
          title : {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <AuthBackground containerStyle={styles.bgStyle1} />
      <AuthBackground containerStyle={styles.bgStyle2} />
      <AuthBackground containerStyle={styles.bgStyle3} />
      <Header headerText={'Welcome'} />
      <View style={styles.searchWrapper}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          label={'Search Your News'}
          placeholderTextColor={colors.lightgray}
          style={styles.searchStyle}
          value={searchWord}
          onChangeText={onChangeSearch}
          placeholder={'Search your desired news'}
        />
        <TouchableOpacity style={styles.searchButton} onPress={onSearchPress}>
          {/* <Text style={{textAlign: 'center'}}>Search</Text> */}
          <Images source={icons.search} style={{height: 42, width: 42}} />
        </TouchableOpacity>
      </View>

      {!isFound ? <NoDataFound /> : <></>}

      <FlatList
        data={DATA}
        // keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: colors.loginBgLight,
  },
  bgStyle1: {
    left: 0,
    top: 0,
  },
  bgStyle2: {
    bottom: hp(12),
  },
  bgStyle3: {
    right: 0,
    bottom: 0,
  },
  cardWrapper: {
    marginHorizontal: wp(3),
    marginTop: hp(5),
    borderWidth: 2,
    borderRadius: 3,
    padding: 12,
  },
  searchWrapper: {
    marginTop: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: wp(3),
    alignItems: 'center',
  },
  searchStyle: {
    flex: 1,
    borderWidth: 2,
    padding: 18,
    fontSize: 18,
    color: colors.black.black,
  },
  searchButton: {
    borderWidth: 2,
    padding: 9,
  },
});
