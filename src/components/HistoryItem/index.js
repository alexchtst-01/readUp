import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {CloseIcons} from '../../assets';
import {BLACK, SHADE_GREY, TEXT_FONT} from '../../utils';

const HistoryItem = ({name}) => {

  const [isShown, setIsShown] = useState(true)

  if (!isShown) return null
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 8,
          backgroundColor: SHADE_GREY,
          borderRadius: 40,
          margin: 5
        }}>
        <Text
          style={{
            fontFamily: TEXT_FONT,
            color: BLACK,
            fontSize: 15,
            marginRight: 8,
          }}>
          {name}
        </Text>
        <TouchableOpacity onPress={() => {setIsShown(false)}}>
          <CloseIcons width="15px" height="15px" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({});
