import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import AppHeaderText from '../../components/AppHeaderText';

import COLORS from '../../constants/Colors';

const YourWorldScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: () => undefined,
      headerLeft: () => null,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <View style={styles.Content}>
        <AppHeaderText subheader="Your World" />
      </View>
    </SafeAreaView>
  );
};

export default YourWorldScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: COLORS.colorContent,
    marginTop: Platform.OS === 'ios' ? 56 : 56,
  },
  Content: {
    marginHorizontal: 20,
  },
});
