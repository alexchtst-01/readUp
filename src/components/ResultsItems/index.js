import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SHADE_GREY } from '../../utils'

const ResultsItems = ({ name }) => {
  return (
    <TouchableOpacity style={{ paddingRight: 4 }}>
      <Text style={{ backgroundColor: SHADE_GREY, marginVertical: 10, paddingVertical: 8, paddingHorizontal: 10, borderRadius: 10 }}>{name}</Text>
    </TouchableOpacity>
  )
}

export default ResultsItems