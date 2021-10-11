import {useNavigation} from '@react-navigation/core';
import {useHeaderHeight} from '@react-navigation/stack';
import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import InputCode, {InputCodeHandler} from 'react-native-input-code';

import AppHeaderText from '../../components/AppHeaderText';
import AppInput from '../../components/AppInput';
import AppLink from '../../components/AppLink';
import AppButton from '../../components/AppButton';
import COLORS from '../../constants/Colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/Typography';
import {ROUTES} from '../../constants/routes';

const VerifyScreen = () => {
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();
  const inputCode = useRef(null);
  const [code, setCode] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => undefined,
    });
  }, [navigation]);

  const onChangeCode = useCallback(value => {
    console.log(value);
    setCode(value);
  }, []);

  const onFullFill = useCallback(
    value => {
      console.log(value);

      setTimeout(() => {
        setCode('');
        inputCode?.current?.focus();
      }, 100);
    },
    [inputCode],
  );

  return (
    <SafeAreaView
      style={{
        ...styles.SafeAreaView,
        marginTop: headerHeight,
      }}>
      <StatusBar barStyle="default" />
      <View style={styles.VerifyScreen}>
        <AppHeaderText
          header="Email Verification"
          message="We’ve sent you a verification code at your email. Please check and enter it below"
        />
        <View style={styles.FormControl}>
          <InputCode
            code={code}
            length={4}
            ref={inputCode}
            onChangeCode={onChangeCode}
            onFullFill={onFullFill}
            passcode
            passcodeChar="•"
            autoFocus
            codeContainerStyle={styles.codeContainerStyle}
            codeContainerCaretStyle={styles.codeContainerCaretStyle}
            codeTextStyle={styles.codeTextStyle}
          />
        </View>
        <View style={styles.FooterView}>
          <AppButton
            title="Submit"
            onPress={() => navigation.navigate(ROUTES.ALLOW_LOCATION)}
          />
          <View style={styles.FooterViewText}>
            <Text style={styles.CreateAccountLabel}>
              Didn't receive any code?
            </Text>
            <AppLink
              labelStyle={styles.CreateAccountLink}
              label="Resend Code"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  VerifyScreen: {
    marginHorizontal: 20,
  },
  FormControl: {
    marginStart: -10,
    paddingStart: 0,
    marginTop: 40,
  },
  FooterView: {
    marginTop: 65,
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
  codeContainerStyle: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#E2E3E4',
    borderColor: '#E2E3E4',
    height: 57,
    width: 57,
  },
  codeContainerCaretStyle: {
    borderColor: '#F96560',
    backgroundColor: '#E2E3E4',
    borderWidth: 1,
    borderRadius: 4,
    height: 57,
    width: 57,
  },
  codeTextStyle: {
    fontSize: 36,
    // lineHeight: 29,
    letterSpacing: 0,
    color: '#5E6870',
    ...FONT_BOLD,
  },
});
