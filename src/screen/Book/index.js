import {StyleSheet, ScrollView, Dimensions} from 'react-native';
import React from 'react';

import {BookHeader, BookDetails} from '../../components';
import { WHITE } from '../../utils';

const data = {
  title: 'Book Title',
  author: 'Alex Cinatra',
  rating: '4.9',
  page: '303',
  lang: 'IDN',
  price: 'RP.200K',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  genre: ['Non-Fictional', 'Sci-Fi', 'For Kids', 'For Kids', 'For Kids']
};

const height = Dimensions.get('window').height

const Book = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{backgroundColor: WHITE, minHeight: height}}>
      <BookHeader
        backOnPress={() => {
          navigation.navigate('Home');
        }}
        data={data}
      />
      <BookDetails data={data} />
    </ScrollView>
  );
};

export default Book;

const styles = StyleSheet.create({});
