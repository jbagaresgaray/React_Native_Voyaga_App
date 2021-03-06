import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLORS from '../../constants/Colors';
import {FONT_LIGHT, FONT_SEMI_BOLD} from '../../constants/Typography';

const index = ({header, subheader, message}) => {
  return (
    <View style={styles.Container}>
      {header && <Text style={styles.HeaderText}>{header}</Text>}
      {subheader && <Text style={styles.SubHeaderText}>{subheader}</Text>}
      {message && <Text style={styles.MessageText}>{message}</Text>}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'flex-start',
  },
  HeaderText: {
    fontSize: 28,
    lineHeight: 41,
    letterSpacing: 0.78,
    color: COLORS.colorStandard,
    ...FONT_SEMI_BOLD,
  },
  SubHeaderText: {
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: 0.67,
    color: COLORS.colorStandard,
    ...FONT_SEMI_BOLD,
  },
  MessageText: {
    marginTop: 6,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.45,
    color: COLORS.colorStandardFade,
    ...FONT_LIGHT,
  },
});
