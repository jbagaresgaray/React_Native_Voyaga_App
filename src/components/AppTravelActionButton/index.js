import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {FONT_MEDIUM} from '../../constants/Typography';
import COLORS from '../../constants/Colors';

import CheckCircleSVG from '../../assets/svg/CheckCircle.svg';
import HeartCircleSVG from '../../assets/svg/HeartCircle.svg';
import PlaneCircleSVG from '../../assets/svg/PlaneCircle.svg';

import PlaneCircleActiveSVG from '../../assets/svg/PlaneCircleActive.svg';

const AppTravelActionButton = () => {
  return (
    <LinearGradient
      colors={[
        'rgba(0,0,0,0)',
        'rgba(5,6,5,0.35)',
        'rgba(11,13,11,0.74)',
        'rgba(15,17,15,1)',
      ]}
      style={styles.Container}>
      <TouchableOpacity activeOpacity={0.8} style={styles.ButtonContainer}>
        <CheckCircleSVG />
        <Text style={styles.ButtonText}>Been</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.ButtonContainer}>
        <HeartCircleSVG />
        <Text style={styles.ButtonText}>Want to go</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.ButtonContainer}>
        {/* <PlaneCircleSVG /> */}
        <PlaneCircleActiveSVG />
        <Text style={styles.ButtonText}>Going</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default AppTravelActionButton;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 14,
    zIndex: 10,
  },
  ButtonContainer: {
    alignItems: 'center',
    marginHorizontal: 24,
  },
  ButtonText: {
    ...FONT_MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.colorBackButton,
    marginTop: 6,
  },
});
