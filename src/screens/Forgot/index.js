import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import AppHeaderText from '../../components/AppHeaderText';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import {ROUTES} from '../../constants/routes';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {getDefaultHeaderHeight} from '@react-navigation/elements';

const ForgotScreen = () => {
  const navigation = useNavigation();
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => undefined,
    });
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        ...styles.SafeAreaView,
        marginTop: headerHeight,
      }}>
      <StatusBar barStyle="default" />
      <View style={styles.LoginScreen}>
        <AppHeaderText
          header="Forgot Password"
          message="Enter your email address below and we'll send you a link to reset your password"
        />
        <View style={styles.FormControl}>
          <AppInput placeholder="Email Address" keyboardType="email-address" />
        </View>
        <View style={styles.FooterView}>
          <AppButton
            title="Submit"
            onPress={() => navigation.navigate(ROUTES.RESET_PASSWORD)}
          />
          <AppButton
            title="Cancel"
            type="clear"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  LoginScreen: {
    marginHorizontal: 20,
  },
  FormControl: {
    marginStart: -10,
    paddingStart: 0,
    marginTop: 50,
  },
  FooterView: {
    marginTop: 55,
  },
});
