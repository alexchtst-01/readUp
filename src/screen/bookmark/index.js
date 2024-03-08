import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

import {BookMarkItem} from '../../components';
import {AddIcons, LeftArrowIcons} from '../../assets';
import {WHITE, BLACK, TEXT_FONT} from '../../utils';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Bookmark = ({navigation}) => {
  const backToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{backgroundColor: WHITE, paddingVertical: 10}}>
      {/* costum stack */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingVertical: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width * 0.5,
          }}>
          <TouchableOpacity onPress={backToHome}>
            <LeftArrowIcons width="22px" height="22px" />
          </TouchableOpacity>
          <Text style={{fontFamily: TEXT_FONT, fontSize: 20, color: BLACK}}>
            My Bookmarks
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('add icon handler');
          }}>
          <AddIcons width="27px" height="27px" />
        </TouchableOpacity>
      </View>

      {/* bookmarks items */}
      <View style={{marginVertical: 20}}>
        <BookMarkItem
          title={'Book Title'}
          author={'Alex Cinatra'}
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... '
          }
        />
        <BookMarkItem
          title={'Book Title'}
          author={'Alex Cinatra'}
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... '
          }
        />
        <BookMarkItem
          title={'Book Title'}
          author={'Alex Cinatra'}
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... '
          }
        />
        <BookMarkItem
          title={'Book Title'}
          author={'Alex Cinatra'}
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... '
          }
        />
        <BookMarkItem
          title={'Book Title'}
          author={'Alex Cinatra'}
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... '
          }
        />
        <BookMarkItem
          title={'Book Title'}
          author={'Alex Cinatra'}
          desc={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... '
          }
        />
      </View>
    </ScrollView>
  );
};

export default Bookmark;

const styles = StyleSheet.create({});
