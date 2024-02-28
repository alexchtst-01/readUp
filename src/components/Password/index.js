import { StyleSheet, TextInput, View, Dimensions } from 'react-native'
import React, {useState} from 'react'

const Password = ({value, onChangeText, costumPlaceholder}) => {
  return (
    <View>
      <TextInput style={styles.input} placeholder={costumPlaceholder} secureTextEntry={true} value={value} onChangeText={onChangeText} />
    </View>
  )
}

export default Password

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    input: {
        height: 45,
        width: width * 0.75,
        borderColor: 'black',
        paddingHorizontal: 10,
        marginVertical: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 8,
    }
})