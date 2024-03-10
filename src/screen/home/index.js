import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {Search, Results, Category, BookCard} from '../../components';
import {TEXT_FONT, WHITE, BLACK, TEXT_TITLE} from '../../utils';

import {genreData, searchData} from '../../dataDummy';

const Home = ({navigation}) => {
  const [filteredData, setFilteredData] = useState([]);
  // sementara kasih flex: 1 biar full aja ke screennya
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{backgroundColor: WHITE, paddingVertical: 10}}>
      <View>
        <Search
          data={searchData}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />

        {filteredData.length > 0 && (
          <Results dataToShow={filteredData} name={'Result'} />
        )}
      </View>

      <View>
        <Category dataCategory={genreData} />
      </View>

      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 3,
          }}>
          <Text style={{color: BLACK, fontFamily: TEXT_TITLE, fontSize: 25}}>
            Popular Titles
          </Text>
          <TouchableOpacity>
            <Text style={{color: BLACK, fontFamily: TEXT_FONT}}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          <BookCard name={'Title here'} toBook={() => { navigation.navigate('Book') }} />
          <BookCard name={'Title here'} toBook={() => { navigation.navigate('Book') }} />
          <BookCard name={'Title here'} toBook={() => { navigation.navigate('Book') }} />
          <BookCard name={'Title here'} toBook={() => { navigation.navigate('Book') }} />
          <BookCard name={'Title here'} toBook={() => { navigation.navigate('Book') }} />
        </ScrollView>
      </View>

      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <Text style={{color: BLACK, fontFamily: TEXT_FONT, fontSize: 25}}>
            Recommended for you
          </Text>
          <TouchableOpacity>
            <Text style={{color: BLACK, fontFamily: TEXT_FONT}}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          <BookCard name={'Title here'} toBook={() => { navigation.navigate('Book') }} />
          <BookCard name={'Title here'} toBook={() => { navigation.navigate('Book') }} />
          <BookCard name={'Title here'} toBook={() => { navigation.navigate('Book') }} />
          <BookCard name={'Title here'} toBook={() => { navigation.navigate('Book') }} />
          <BookCard name={'Title here'} toBook={() => { navigation.navigate('Book') }} />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
