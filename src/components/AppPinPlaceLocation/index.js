import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MapPinSVG from '../../assets/svg/MapPin.svg';
import {FONT_SEMI_BOLD} from '../../constants/Typography';
import COLORS from '../../constants/Colors';

const AppPinPlaceLocation = ({location, dark}) => {
  return (
    <View style={styles.Container}>
      <MapPinSVG
        style={{
          marginRight: 6,
        }}
      />
      <Text
        style={[
          styles.LocationText,
          dark ? styles.LocationTextColor2 : styles.LocationTextColor1,
        ]}>
        {location}
      </Text>
      <View style={styles.LocationSeparator} />
      <Text
        style={[
          styles.LocationText,
          dark ? styles.LocationTextColor2 : styles.LocationTextColor1,
        ]}>
        9189.7 km
      </Text>
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
    textTransform: 'uppercase',
  },
  LocationTextColor1: {
    color: COLORS.colorNote2,
  },
  LocationTextColor2: {
    color: '#5E6870',
  },
  LocationSeparator: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: COLORS.colorBackButton,
    marginHorizontal: 6,
  },
});
