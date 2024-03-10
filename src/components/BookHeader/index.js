import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

import {BLACK, PRIMARY_GREEN, SHADE_GREY, TEXT_FONT, WHITE} from '../../utils';
import {WhiteLeftArrowIcons, WhiteBookmarkIcons} from '../../assets';

const BookHeader = ({backOnPress, data}) => {
  return (
    <View
      style={{
        backgroundColor: PRIMARY_GREEN,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingBottom: 50
      }}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 8,
          paddingVertical: 30,
        }}>
        <TouchableOpacity onPress={backOnPress}>
          <WhiteLeftArrowIcons width="24px" height="24px" />
        </TouchableOpacity>
        <Text style={{fontFamily: TEXT_FONT, fontSize: 16, color: WHITE}}>
          Book’s Detail
        </Text>
        <WhiteBookmarkIcons width="24px" height="24px" />
      </View>
      {/* content */}
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 30,
        }}>
        <View style={styles.Image} />
        <Text style={{fontFamily: TEXT_FONT, color: WHITE}}>{data.title}</Text>
        <Text style={{fontFamily: TEXT_FONT, color: WHITE}}>
          {data.author}
        </Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center'}}>
        <View>
          <Text style={styles.Description1}>Rating</Text>
          <Text style={styles.Description1Child}>{data.rating}</Text>
        </View>
        <View>
          <Text style={styles.Description1}>Pages</Text>
          <Text style={styles.Description1Child}>{data.page}</Text>
        </View>
        <View>
          <Text style={styles.Description1}>Language</Text>
          <Text style={styles.Description1Child}>{data.lang}</Text>
        </View>
        <View>
          <Text style={styles.Description1}>Price</Text>
          <Text style={styles.Description1Child}>{data.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default BookHeader;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Image: {
    height: height * 0.2,
    width: width * 0.39,
    backgroundColor: '#D9D9D9',
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  Description1: {
    fontFamily: TEXT_FONT,
    color: WHITE,
    fontSize: 16,
    textAlign: 'center'
  },
  Description1Child: {
    fontFamily: TEXT_FONT,
    color: '#436850',
    fontSize: 12,
    textAlign: 'center',
  }
});
