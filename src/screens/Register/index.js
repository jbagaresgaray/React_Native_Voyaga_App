import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import AppHeaderText from '../../components/AppHeaderText';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import AppLink from '../../components/AppLink';
import {ROUTES} from '../../constants/routes';
import COLORS from '../../constants/Colors';
import {FONT_REGULAR} from '../../constants/Typography';
import AppCheckbox from '../../components/AppCheckbox';
import {ScrollView} from 'react-native-gesture-handler';
import {getDefaultHeaderHeight} from '@react-navigation/elements';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  const [isAgree, setIsAgree] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => undefined,
    });
  }, [navigation]);

  const onSignIn = () => {
    navigation.navigate(ROUTES.LOGIN);
  };

  const onRegister = () => {
    navigation.navigate(ROUTES.VERIFY);
  };

  return (
    <SafeAreaView
      style={{
        ...styles.SafeAreaView,
        marginTop: headerHeight,
      }}>
      <StatusBar barStyle="default" />
      <ScrollView contentContainerStyle={styles.RegisterScreen}>
        <AppHeaderText
          header="Sign Up"
          message="Please fill in the information below"
        />
        <View style={styles.FormControl}>
          <AppInput placeholder="Full name" />
          <AppInput placeholder="Email Address" keyboardType="email-address" />
          <AppInput placeholder="Password" secureTextEntry />
          <AppInput placeholder="Confirm Password" secureTextEntry />
          <View style={styles.TermsServiceViewContainer}>
            <AppCheckbox
              checked={isAgree}
              onPress={() => setIsAgree(!isAgree)}
            />
            <View>
              <View style={styles.TermsServiceView}>
                <Text style={styles.CreateAccountLabel}>I agree with the</Text>
                <AppLink
                  labelStyle={styles.CreateAccountLink}
                  label="Terms of Services"
                />
              </View>
              <View style={styles.TermsServiceView}>
                <Text style={styles.CreateAccountLabel}>and</Text>
                <AppLink
                  labelStyle={styles.CreateAccountLink}
                  label="Privacy Policy"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.FooterView}>
          <AppButton title="Sign Up" onPress={onRegister} />
          <View style={styles.FooterViewText}>
            <Text style={styles.CreateAccountLabel}>Already a member?</Text>
            <AppLink
              labelStyle={styles.CreateAccountLink}
              label="Sign In"
              onPress={onSignIn}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  RegisterScreen: {
    marginHorizontal: 20,
  },
  FormControl: {
    marginStart: -10,
    paddingStart: 0,
    marginTop: 40,
  },
  TermsServiceViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TermsServiceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TermsCheckbox: {},
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
    // lineHeight: 18,
    letterSpacing: 0,
    color: COLORS.colorStandard,
    ...FONT_REGULAR,
  },
});
