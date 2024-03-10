import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BLACK, SHADE_GREY, TEXT_FONT} from '../../utils';
import { ResultsItems } from '..';

const BookDetails = ({data}) => {
  return (
    <View style={styles.box}>
      <View style={{marginVertical: 15}}>
        <Text style={styles.title}>Synopsis</Text>
        <Text style={{fontFamily: TEXT_FONT, fontSize: 14}}>{data.desc}</Text>
      </View>
      <View style={{marginVertical: 15}}>
        <Text style={styles.title}>Genre</Text>
        <Text>
          {data.genre.length > 0 &&
            data.genre.map((item, i) => {
              return (
                <ResultsItems name={item} key={i} />
              );
            })}
        </Text>
      </View>
    </View>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: TEXT_FONT,
    color: BLACK,
    fontSize: 20,
    marginBottom: 5,
  },
  Genre: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: SHADE_GREY,
    margin: 10
  },
});
