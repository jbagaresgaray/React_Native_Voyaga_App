import {useNavigation} from '@react-navigation/core';
import {useHeaderHeight} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import AppHeaderText from '../../components/AppHeaderText';
import AppButton from '../../components/AppButton';
import COLORS from '../../constants/Colors';
import {ROUTES} from '../../constants/routes';

import ThankSVG from '../../assets/svg/ThankYou.svg';

const CompleteThankYouScreen = () => {
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
      <View style={styles.LoginScreen}>
        <View style={styles.SVGView}>
          <ThankSVG />
        </View>
        <AppHeaderText
          header="Thank You!"
          message="Welcome to Voyaga we hope you enjoy all the features and have a wonderful experience with us"
        />
        <View style={styles.FooterView}>
          <AppButton
            title="Complete your profile"
            onPress={() => navigation.navigate(ROUTES.COMPLETE_PROFILE)}
          />
          <AppButton
            title="Continue to App"
            type="clear"
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CompleteThankYouScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: COLORS.colorContent,
  },
  LoginScreen: {
    marginHorizontal: 20,
    flex: 1,
  },
  SVGView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  FooterView: {
    marginTop: 55,
  },
});
