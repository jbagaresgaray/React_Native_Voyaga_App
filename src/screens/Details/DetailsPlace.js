import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import AppPinPlaceLocation from '../../components/AppPinPlaceLocation';
import {FONT_MEDIUM} from '../../constants/Typography';
import COLORS from '../../constants/Colors';

const DetailsPlace = ({place, location}) => {
  return (
    <View style={styles.PlaceTitleContainer}>
      <Text style={styles.LocationText}>Great Wall of China</Text>
      <AppPinPlaceLocation dark location="ASIA, PHILIPPINES" />
    </View>
  );
};

export default DetailsPlace;

const styles = StyleSheet.create({
  LocationText: {
    ...FONT_MEDIUM,
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.78,
    color: COLORS.colorStandard,
    marginBottom: 6,
  },
  PlaceTitleContainer: {
    marginHorizontal: 22,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.colorBorder,
    paddingBottom: 24,
  },
});
