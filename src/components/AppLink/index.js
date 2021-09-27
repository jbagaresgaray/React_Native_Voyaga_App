import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FONT_MEDIUM} from '../../constants/Typography';

const index = ({containerStyle, labelStyle, label, onPress}) => {
  return (
    <TouchableOpacity
      style={containerStyle}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={StyleSheet.flatten([styles.linkText, labelStyle])}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  linkText: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.38,
    ...FONT_MEDIUM,
  },
});
