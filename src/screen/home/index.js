import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { Search, Results, Category } from '../../components';
import { TEXT_FONT, WHITE } from '../../utils';

import { genreData, searchData } from '../../dataDummy';

const Home = ({ navigation }) => {
  const [filteredData, setFilteredData] = useState([])
  // sementara kasih flex: 1 biar full aja ke screennya
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: WHITE, paddingVertical: 10 }}>

      <Search data={searchData} filteredData={filteredData} setFilteredData={setFilteredData} />
      {filteredData.length > 0 &&
        <Results dataToShow={filteredData} name={'Result'} />
      }

      <Category dataCategory={genreData} />

    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({})