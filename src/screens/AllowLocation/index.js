import React, {useLayoutEffect} from 'react';
import {View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import AppHeaderText from '../../components/AppHeaderText';
import AppButton from '../../components/AppButton';
import COLORS from '../../constants/Colors';
import {ROUTES} from '../../constants/routes';

import AllowLocationSVG from '../../assets/svg/AllowLocation.svg';
import {useNavigation} from '@react-navigation/native';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {getDefaultHeaderHeight} from '@react-navigation/elements';

const AllowLocationScreen = () => {
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
          <AllowLocationSVG />
        </View>
        <AppHeaderText
          header="Allow access to your location"
          message="Please allow access to location to maximize the features of the app"
        />
        <View style={styles.FooterView}>
          <AppButton
            title="Allow"
            onPress={() => navigation.navigate(ROUTES.ALLOW_NOTIFICATION)}
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

export default AllowLocationScreen;

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
