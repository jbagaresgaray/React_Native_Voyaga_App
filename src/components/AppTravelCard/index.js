import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import AppPinPlaceLocation from '../AppPinPlaceLocation';
import {FONT_LIGHT, FONT_MEDIUM} from '../../constants/Typography';
import COLORS from '../../constants/Colors';
import AppTravelPriceBadge from '../AppTravelPriceBadge';
import AppTravelActionButton from '../AppTravelActionButton';
import {LinearGradient} from 'expo-linear-gradient';

const AppTravelCard = () => {
  return (
    <View style={styles.TravelCard}>
      <LinearGradient
        colors={['rgba(0,0,0,0.4)', 'rgba(37,37,37,0)', 'rgba(170,170,170,0)']}
        style={styles.LinearGradient}
      />
      <ImageBackground
        style={styles.ImageBackground}
        source={require('../../assets/img/travel.jpg')}
      />
      <View style={styles.Container}>
        <View style={styles.ContainerHeader}>
          <View>
            <AppPinPlaceLocation location="ASIA, PHILIPPINES" />
            <Text style={styles.LocationText}>Siargao</Text>
            <Text style={styles.DistanceText}>1189.7 km</Text>
          </View>
          <AppTravelPriceBadge />
        </View>
      </View>
      <AppTravelActionButton />
    </View>
  );
};

export default AppTravelCard;

const styles = StyleSheet.create({
  TravelCard: {
    height: 465,
    borderRadius: 16,
    marginBottom: 20,
    position: 'relative',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: COLORS.colorDetail,
  },
  ImageBackground: {
    height: '100%',
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  LinearGradient: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
  },
  Container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    zIndex: 2,
  },
  ContainerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  LocationText: {
    ...FONT_MEDIUM,
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: 0.67,
    color: COLORS.colorWhite,
  },
  DistanceText: {
    ...FONT_LIGHT,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.33,
    color: COLORS.colorWhite,
  },
});
