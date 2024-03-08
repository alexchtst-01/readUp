import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {BookSearchingItem, HistoryItem} from '../../components';
import {SearchIcons, LeftArrowIcons, MicroPhoneIcons} from '../../assets';
import {BLACK, SHADE_GREY, TEXT_FONT, WHITE} from '../../utils';
import {bookData} from '../../dataDummy';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Searchs = ({navigation}) => {
  const [searchQuery, onChangeSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = bookData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [searchQuery])

  return (
    <ScrollView
      contentContainerStyle={{backgroundColor: WHITE, minHeight: height}}>
      {/* costum search stack */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{marginRight: 10}}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <LeftArrowIcons width="24px" height="24px" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 50,
            backgroundColor: SHADE_GREY,
            paddingHorizontal: 10,
            paddingVertical: 2,
            marginVertical: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <SearchIcons width="24px" height="24px" />
            <TextInput
              placeholder="Titles, authors, or topic"
              style={{
                fontFamily: TEXT_FONT,
                width: width * 0.65,
                fontSize: 16,
              }}
              value={searchQuery}
              onChangeText={onChangeSearchQuery}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              console.log('microphone is clicked');
            }}>
            <MicroPhoneIcons width="24px" height="24px" />
          </TouchableOpacity>
        </View>
      </View>

      {/* history */}
      {filteredData.length === 0 && (
        <View>
          <Text
            style={{
              fontFamily: TEXT_FONT,
              fontSize: 14,
              color: BLACK,
              paddingHorizontal: 20,
            }}>
            Search History
          </Text>
          <Text lineBreakMode={undefined} style={{marginLeft: 10}}>
            {bookData.length > 0 &&
              bookData
                .slice(0, Math.min(6, bookData.length))
                .map(item => {
                  return <HistoryItem key={item.id} name={item.genre} />;
                })}
          </Text>
        </View>
      )}

      {/* result */}
      <View style={{marginHorizontal: 20}}>
        {filteredData.length > 0 &&
          filteredData.map(item => {
            return (
              <BookSearchingItem
                key={item.id}
                title={item.title}
                author={item.author}
                genre={item.genre}
              />
            );
          })}
      </View>
    </ScrollView>
  );
};

export default Searchs;

const styles = StyleSheet.create({});
