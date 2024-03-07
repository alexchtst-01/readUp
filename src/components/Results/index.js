import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import ResultsItems from '../ResultsItems'
import { BLACK, TEXT_FONT, showSomeNameOnly } from '../../utils'

const Results = ({ dataToShow, name }) => {
  return (
    <View style={{ justifyContent: 'flex-start', marginVertical: 10, marginLeft: 20 }}>
      <Text style={{ color: BLACK, fontFamily: TEXT_FONT, fontSize: 18 }}>{name}</Text>
      <Text numberOfLines={undefined}>
        {dataToShow.length > 0 &&
          dataToShow.slice(0, Math.min(5, dataToShow.length)).map((item) => {
            return (
              <ResultsItems key={item.id} name={showSomeNameOnly(item.book_name, 20)} />
            )
          })
        }
      </Text>
      <TouchableOpacity onPress={() => { console.log("pindah ke search bar") }}>
        <Text style={{ fontFamily: TEXT_FONT, fontWeight: 'bold' }}>See More Here ....</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Results