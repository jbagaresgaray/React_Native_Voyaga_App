import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import AppHeaderText from '../../components/AppHeaderText';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {getDefaultHeaderHeight} from '@react-navigation/elements';

const ResetScreen = () => {
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
          header="Reset Password"
          message="You’ve requested a new password. Please enter your new password below"
        />
        <View style={styles.FormControl}>
          <AppInput placeholder="Password" secureTextEntry />
          <AppInput placeholder="Confirm Password" secureTextEntry />
        </View>
        <View style={styles.FooterView}>
          <AppButton title="Submit" />
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

export default ResetScreen;

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
