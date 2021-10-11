import {useNavigation} from '@react-navigation/core';
import {useHeaderHeight} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import AppHeaderText from '../../components/AppHeaderText';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';

import COLORS from '../../constants/Colors';
import {ROUTES} from '../../constants/routes';
import AppUploadPhoto from '../../components/AppUploadPhoto';

const CompleteProfileScreen = () => {
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

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
      <ScrollView contentContainerStyle={styles.LoginScreen}>
        <AppHeaderText header="Complete Profile" />
        <AppUploadPhoto />
        <View style={styles.FormControl}>
          <AppInput placeholder="Full name" />
          <AppInput placeholder="Email Address" keyboardType="email-address" />
          <AppInput placeholder="Country" />
          <AppInput placeholder="City" />
          <AppInput placeholder="Home Airport" />
          <AppInput placeholder="Short Biography" />
        </View>
        <View style={styles.FooterView}>
          <AppButton
            title="Done"
            onPress={() => navigation.navigate(ROUTES.YOUR_WORLD)}
          />
          <AppButton
            title="Continue to App"
            type="clear"
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompleteProfileScreen;

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
  FooterView: {
    marginTop: 55,
  },
});
