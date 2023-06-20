import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FONT_MEDIUM} from '../../constants/Typography';
import COLORS from '../../constants/Colors';

const AppTravelPriceBadge = () => {
  return (
    <View style={styles.BadgeContainer}>
      <Text style={styles.PriceText}>$243</Text>
    </View>
  );
};

export default AppTravelPriceBadge;

const styles = StyleSheet.create({
  BadgeContainer: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: `${COLORS.colorBadge}70`,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  PriceText: {
    ...FONT_MEDIUM,
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.colorWhite,
  },
});
