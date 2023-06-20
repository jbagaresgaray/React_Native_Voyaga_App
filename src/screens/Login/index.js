import React, {useLayoutEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getDefaultHeaderHeight} from '@react-navigation/elements';

import AppHeaderText from '../../components/AppHeaderText';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import AppLink from '../../components/AppLink';

import COLORS from '../../constants/Colors';

import {FONT_MEDIUM, FONT_REGULAR} from '../../constants/Typography';
import {ROUTES} from '../../constants/routes';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const LoginScreen = () => {
  const navigation = useNavigation();
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();

  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => undefined,
    });
  }, [navigation]);

  const onRegister = () => {
    navigation.navigate(ROUTES.REGISTER);
  };

  const onForgotPassword = () => {
    navigation.navigate(ROUTES.FORGOT);
  };

  const onLogin = () => {
    navigation.navigate(ROUTES.MAIN);
  };

  return (
    <SafeAreaView
      style={{
        ...styles.SafeAreaView,
        marginTop: headerHeight,
      }}>
      <StatusBar barStyle="default" />
      <View style={styles.LoginScreen}>
        <AppHeaderText
          header="Sign In"
          message="Enter your login details below"
        />
        <View style={styles.FormControl}>
          <AppInput placeholder="Email Address" keyboardType="email-address" />
          <AppInput placeholder="Password" secureTextEntry />
          <AppLink
            containerStyle={styles.ForgotPassword}
            labelStyle={styles.ForgotPasswordText}
            label="Forgot password"
            onPress={onForgotPassword}
          />
        </View>
        <View style={styles.FooterView}>
          <AppButton title="Sign In" onPress={onLogin} />
          <View style={styles.FooterViewText}>
            <Text style={styles.CreateAccountLabel}>
              Don't have an Account?
            </Text>
            <AppLink
              labelStyle={styles.CreateAccountLink}
              label="Create Account"
              onPress={onRegister}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: COLORS.colorContent,
  },
  LoginScreen: {
    marginHorizontal: 20,
  },
  FormControl: {
    marginStart: -10,
    paddingStart: 0,
    marginTop: 40,
  },
  ForgotPassword: {
    alignItems: 'flex-end',
  },
  ForgotPasswordText: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.38,
    color: COLORS.colorPink,
    ...FONT_MEDIUM,
  },
  FooterView: {
    marginTop: 55,
  },
  FooterViewText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  CreateAccountLabel: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0,
    color: COLORS.colorPink,
    ...FONT_REGULAR,
    marginRight: 4,
  },
  CreateAccountLink: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0,
    color: COLORS.colorStandard,
    ...FONT_REGULAR,
  },
});
