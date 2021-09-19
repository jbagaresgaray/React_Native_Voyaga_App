import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../constants/Colors';

const {width, height} = Dimensions.get('window');

import LogoSVG from '../../assets/svg/logo.svg';
import backgroundImg from '../../assets/img/landing.png';

const LandingScreen = () => {
  return (
    <View style={styles.SafeAreaView}>
      <ImageBackground
        source={backgroundImg}
        style={styles.ImageBackground}
        resizeMode="cover">
        <LinearGradient
          style={styles.LinearGradient}
          colors={['#EB399B', '#FE7B5D']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          angle={21.5}
        />
        <View style={styles.CenterLogo}>
          <LogoSVG />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    position: 'relative',
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height,
    width,
  },
  LinearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height,
    width,
    opacity: 0.75,
    backgroundColor: COLORS.colorDetail,
  },
  CenterLogo: {
    flex: 1,
    width: '100%',
    marginTop: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
