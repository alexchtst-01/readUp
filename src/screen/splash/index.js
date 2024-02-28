import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import {LIGHT, PRIMARY_GREEN, RIGHTS_TITLE_FONT, SPLASH_FONT} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GateWay')
    }, 3000)
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>ReadUp</Text>
        <Text style={styles.rights}>All Right Reserved by ach</Text>
      </View>
    </View>
  );
};

export default Splash;

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
    height: 0.6 * height,
    paddingBottom: 50,
  },
  text: {
    textAlign: 'center',
    fontFamily: SPLASH_FONT,
    fontSize: 50,
    color: LIGHT,
    fontWeight: 'bold'
  },
  rights: {
    textAlign: 'center',
    fontFamily: RIGHTS_TITLE_FONT,
    fontSize: 15,
    color: LIGHT,
    bottom: 1,
  },
});
