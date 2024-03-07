import { StyleSheet, View, TextInput, Dimensions, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import { SearchIcons } from '../../assets'
import { SHADE_GREY, TEXT_FONT } from '../../utils'

const Search = ({ data, filteredData, setFilteredData }) => {
  const [searchQuery, onChangeSearchQuery] = useState('')

  useEffect(() => {
    if (searchQuery) {
      const filtered = data.filter((item) =>
        item.book_genre.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [searchQuery])

  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.searchBar}>
        <SearchIcons width="24px" height="24px" />
        <TextInput
          placeholder='Titles, authors, or topic'
          style={{ marginLeft: 5, fontFamily: TEXT_FONT, fontSize: 16 }}
          value={searchQuery}
          onChangeText={onChangeSearchQuery}
        />
      </View>
    </View>
  )
}

export default Search

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: SHADE_GREY,
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 20,
    width: width * 0.95,
  }
})