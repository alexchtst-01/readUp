import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { BLACK, SHADE_GREEN } from '../../utils'

const Test = () => {
  const [count, setCount] = useState(0);
  const [isOverFlow, setIsOverFlow] = useState(false);

  useEffect(() => {
    count > 10 ? setIsOverFlow(true) : setIsOverFlow(false)
  }, [count]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => { setCount(count + 1) }}>
        <Text style={{ color: BLACK, fontSize: 20 }}>Tambah</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.counterStyle(isOverFlow)}>{count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => { count > 0 ? setCount(count - 1) : 0 }}>
        <Text style={{ color: BLACK, fontSize: 20 }}>Kurang</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Test

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SHADE_GREEN,
    width: width * 0.75,
    paddingVertical: 10,
    marginVertical: 20,
    borderRadius: 10
  },
  counterStyle: isOverFlow => {
    
    if (isOverFlow) {
      return {
        color: 'red',
        fontSize: 20
      }
    } else if (!isOverFlow) {
      return {
        color: 'black',
        fontSize: 20
      }
    }
  }
})