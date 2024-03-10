import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {BLACK, TEXT_FONT} from '../../utils';
import {ResultsItems} from '..';

const Category = ({dataCategory}) => {
  return (
    <View style={{marginVertical: 20, marginLeft: 20}}>
      <Text
        style={{
          color: BLACK,
          fontFamily: TEXT_FONT,
          fontSize: 25,
          justifyContent: 'flex-start',
        }}>
        Category
      </Text>
      <Text>
        {dataCategory.length > 0 &&
          dataCategory.slice(0, Math.min(5, dataCategory.length)).map(item => {
            return <ResultsItems key={item.id} name={item.genre} />;
          })}
      </Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
