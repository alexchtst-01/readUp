import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {BLACK, PRIMARY_GREEN, TEXT_FONT} from '../../utils';

const BookCard = ({name, toBook}) => {
  return (
    <TouchableOpacity onPress={toBook}>
      <View style={styles.container}>
        <View style={styles.image}></View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookCard;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  image: {
    height: height * 0.25,
    width: width * 0.3,
    backgroundColor: PRIMARY_GREEN,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    fontFamily: TEXT_FONT,
    marginTop: 2,
    color: BLACK,
  },
});
