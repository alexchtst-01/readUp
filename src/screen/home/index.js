import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import CostumDrawer from '../../components/CostumDrawer';

const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text>Home</Text>
        <CostumDrawer />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({})