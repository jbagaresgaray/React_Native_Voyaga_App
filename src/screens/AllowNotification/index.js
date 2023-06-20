import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import AppHeaderText from '../../components/AppHeaderText';
import AppButton from '../../components/AppButton';
import COLORS from '../../constants/Colors';
import {ROUTES} from '../../constants/routes';

import AllowNotificationSVG from '../../assets/svg/AllowNotifications.svg';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {getDefaultHeaderHeight} from '@react-navigation/elements';

const AllowNotificationScreen = () => {
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
        <View style={styles.SVGView}>
          <AllowNotificationSVG />
        </View>
        <AppHeaderText
          header={`Allow \nNotifications`}
          message="Please enable push notification so you’ll stay updated on all future journeys of your friends"
        />
        <View style={styles.FooterView}>
          <AppButton
            title="Allow"
            onPress={() =>
              navigation.navigate(ROUTES.COMPLETE_PROFILE_THANK_YOU)
            }
          />
          <AppButton
            title="Maybe Later"
            type="clear"
            onPress={() =>
              navigation.navigate(ROUTES.COMPLETE_PROFILE_THANK_YOU)
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AllowNotificationScreen;

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
