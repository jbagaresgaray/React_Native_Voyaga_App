import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import COLORS from '../../constants/Colors';
import {FONT_MEDIUM, FONT_SEMI_BOLD} from '../../constants/Typography';
import {Icon} from 'react-native-elements';

const AppTravelNewsCard = () => {
  return (
    <View style={styles.MainContainer}>
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'rgba(37,37,37,0)', 'rgba(170,170,170,0)']}
        style={styles.LinearGradient}
      />
      <ImageBackground
        style={styles.ImageBackground}
        source={require('../../assets/img/news.jpg')}
      />
      <View style={styles.Container}>
        <Text style={styles.SubTitleText}>10 DESTINATIONS</Text>
        <Text style={styles.TitleText}>Destinations you want to go</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.CTAButton}>
          <Text style={styles.CTAButtonText}>See all</Text>
          <Icon name="chevron-right" size={16} color={COLORS.colorPink} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppTravelNewsCard;

const styles = StyleSheet.create({
  MainContainer: {
    position: 'relative',
    height: 292,
    borderRadius: 16,
    marginBottom: 20,
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
  TitleText: {
    ...FONT_MEDIUM,
    fontSize: 24,
    lineHeight: 29,
    color: COLORS.colorWhite,
    paddingRight: 40,
  },
  SubTitleText: {
    ...FONT_SEMI_BOLD,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.33,
    color: COLORS.colorNote2,
    textTransform: 'uppercase',
  },
  CTAButton: {
    backgroundColor: COLORS.colorContent,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    width: 68,

    marginTop: 16,
  },
  CTAButtonText: {
    ...FONT_MEDIUM,
    fontSize: 10,
    lineHeight: 13,
    letterSpacing: 0.54,
  },
  CTAIcon: {
    color: COLORS.colorPink,
  },
});
