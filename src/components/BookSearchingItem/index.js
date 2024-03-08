import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BLACK, SHADE_GREEN, TEXT_FONT, showSomeNameOnly} from '../../utils';

const BookSearchingItem = ({title, author, genre}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: SHADE_GREEN,
        padding: 10,
        borderRadius: 15,
        margin: 8
      }}>
      <View>
        <Text style={{fontFamily: TEXT_FONT, color: BLACK, fontSize: 16, fontWeight:'bold'}}>{showSomeNameOnly(title, 20)}</Text>
        <Text style={{fontFamily: TEXT_FONT, color: BLACK, fontSize: 14}}>{genre}</Text>
      </View>
      <Text style={{fontFamily: TEXT_FONT, color: BLACK, fontSize: 14, fontWeight: 'bold'}}>{showSomeNameOnly(author, 10)}</Text>
    </View>
  );
};

export default BookSearchingItem;

const styles = StyleSheet.create({});
