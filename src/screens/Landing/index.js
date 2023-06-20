import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../../components/AppButton';

import COLORS from '../../constants/Colors';

import LogoSVG from '../../assets/svg/logo.svg';
import FacebookSVG from '../../assets/svg/Facebook.svg';
import GoogleSVG from '../../assets/svg/Google.svg';
import InstagramSVG from '../../assets/svg/Instagram.svg';
import backgroundImg from '../../assets/img/landing.png';
import {FONT_BOLD, FONT_LIGHT, FONT_REGULAR} from '../../constants/Typography';
import {ROUTES} from '../../constants/routes';

const {width, height} = Dimensions.get('window');

const LandingScreen = () => {
  const navigation = useNavigation();

  const onRegister = () => {
    navigation.navigate(ROUTES.REGISTER);
  };

  const onLogin = () => {
    navigation.navigate(ROUTES.LOGIN);
  };

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
        <View style={styles.FooterView}>
          <View style={styles.FooterTabView}>
            <AppButton title="Sign In" variant="secondary" onPress={onLogin} />
            <View style={styles.BottomSeparatorView}>
              <View style={styles.BottomViewSeparator} />
              <Text style={styles.BottomSeparatorText}>OR</Text>
              <View style={styles.BottomViewSeparator} />
            </View>
            <View style={styles.BottomSeparatorView}>
              <View style={styles.BottomGridView}>
                <TouchableOpacity style={styles.BottomColumnView}>
                  <FacebookSVG />
                </TouchableOpacity>
                <TouchableOpacity style={styles.BottomColumnView}>
                  <GoogleSVG />
                </TouchableOpacity>
                <TouchableOpacity style={styles.BottomColumnView}>
                  <InstagramSVG />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.BottomSeparatorView}>
              <Text style={styles.BottomText}>
                Don’t have an account?{' '}
                <Text style={styles.BottomText2} onPress={onRegister}>
                  Create Account
                </Text>
              </Text>
            </View>
          </View>
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
  FooterView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 0,
  },
  FooterTabView: {
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 40,
  },
  BottomViewSeparator: {
    borderRadius: 2,
    height: 3,
    width: 150,
    backgroundColor: '#CE6994',
  },
  BottomSeparatorView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  BottomSeparatorText: {
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: COLORS.colorWhite,
    ...FONT_BOLD,
    marginLeft: 6,
    marginRight: 6,
  },
  BottomText: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0,
    color: COLORS.colorBackButton,
    ...FONT_LIGHT,
  },
  BottomText2: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0,
    color: COLORS.colorWhite,
    ...FONT_REGULAR,
  },
  BottomGridView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 25,
  },
  BottomColumnView: {
    flex: 1,
    alignItems: 'center',
  },
});
