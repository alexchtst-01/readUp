import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text>Home</Text>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({})