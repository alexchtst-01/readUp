import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LIGHT, PRIMARY_GREEN, RIGHTS_TITLE_FONT, SPLASH_FONT} from '../../utils';

const Spalash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>ReadUp</Text>
        <Text style={styles.rights}>All Right Reserved by ach</Text>
      </View>
    </View>
  );
};

export default Spalash;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_GREEN,
    justifyContent: 'flex-end',
  },
  box: {
    justifyContent: 'space-between',
    height: 0.5 * height,
    paddingBottom: 50,
  },
  text: {
    textAlign: 'center',
    fontFamily: SPLASH_FONT,
    fontSize: 50,
    color: LIGHT,
  },
  rights: {
    textAlign: 'center',
    fontFamily: RIGHTS_TITLE_FONT,
    fontSize: 12,
    color: LIGHT,
    bottom: 1,
  },
});
