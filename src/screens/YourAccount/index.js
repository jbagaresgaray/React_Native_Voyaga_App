import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import AppHeaderText from '../../components/AppHeaderText';

import COLORS from '../../constants/Colors';
import {hasNotch} from 'react-native-device-info';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {getDefaultHeaderHeight} from '@react-navigation/elements';
import useStatusBarHeight from '../../hooks/useStatusBarHeight';
import AppAvatar from '../../components/AppAvatar';
import {FONT_MEDIUM} from '../../constants/Typography';

const YourAccountScreen = () => {
  const navigation = useNavigation();
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);
  const statusBarHeight = useStatusBarHeight();

  return (
    <ScrollView style={styles.SafeAreaView}>
      <View
        style={{
          ...styles.Content,
          paddingTop: hasNotch() ? statusBarHeight + 10 : headerHeight,
        }}>
        <AppHeaderText subheader="Your Account" />
        <View style={styles.AppAvatar}>
          <AppAvatar />
          <Text style={styles.Name}>Robert Kiyosake</Text>
          <Text style={styles.UploadText}>Upload photo</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default YourAccountScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: COLORS.colorContent,
  },
  Content: {
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: COLORS.colorContent,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 4,
  },
  AppAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  Name: {
    ...FONT_MEDIUM,
    fontSize: 24,
    lineHeight: 29,
    color: COLORS.colorStandard,
    marginBottom: 6,
    marginTop: 16,
  },
  UploadText: {
    ...FONT_MEDIUM,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.33,
    color: COLORS.colorStandard,
  },
});
