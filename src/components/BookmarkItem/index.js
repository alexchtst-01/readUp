import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {CloseIcons} from '../../assets';
import {BLACK, TEXT_FONT, PRIMARY_GREEN, SHADE_GREY} from '../../utils';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const BookMarkItem = ({title, author, desc, toBook}) => {
  return (
    <TouchableOpacity onPress={toBook}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: SHADE_GREY,
          borderRadius: 10,
          paddingRight: 8,
          margin: 5,
        }}>
        <View
          style={{
            height: height * 0.2025,
            width: width * 0.25,
            backgroundColor: PRIMARY_GREEN,
            resizeMode: 'cover',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        />
        <View style={{flex: 1, marginHorizontal: 10, justifyContent: 'center'}}>
          <Text style={{fontFamily: TEXT_FONT, fontSize: 16, color: BLACK}}>
            {title}
          </Text>
          <Text
            style={{
              fontFamily: TEXT_FONT,
              fontSize: 12,
              color: BLACK,
              marginBottom: 10,
            }}>
            {author}
          </Text>
          <Text style={{fontFamily: TEXT_FONT, fontSize: 12, color: BLACK}}>
            Description
          </Text>
          <Text style={{fontFamily: TEXT_FONT, fontSize: 16}}>{desc}</Text>
        </View>

        <TouchableOpacity style={{marginRight: 10, marginTop: 10}}>
          <CloseIcons width="22px" height="22px" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default BookMarkItem;

const styles = StyleSheet.create({});
