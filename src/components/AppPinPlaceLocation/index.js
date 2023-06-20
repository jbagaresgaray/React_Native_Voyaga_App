import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MapPinSVG from '../../assets/svg/MapPin.svg';
import {FONT_SEMI_BOLD} from '../../constants/Typography';
import COLORS from '../../constants/Colors';

const AppPinPlaceLocation = ({location}) => {
  return (
    <View style={styles.Container}>
      <MapPinSVG />
      <Text style={styles.LocationText}>{location}</Text>
    </View>
  );
};

export default AppPinPlaceLocation;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  LocationText: {
    ...FONT_SEMI_BOLD,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.33,
    color: COLORS.colorNote2,
    marginLeft: 6,
    textTransform: 'uppercase',
  },
});
