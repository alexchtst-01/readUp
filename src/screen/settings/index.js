import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const Settings = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text>Settings</Text>
      </View>
    </ScrollView>
  )
}

export default Settings

const styles = StyleSheet.create({})