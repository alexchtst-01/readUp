import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const Bookmark = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <View>
        <Text>Bookmark</Text>
      </View>
    </ScrollView>
  )
}

export default Bookmark

const styles = StyleSheet.create({})