import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {StatusBar, SafeAreaView, StyleSheet, View} from 'react-native';

import AppHeaderText from '../../components/AppHeaderText';

import COLORS from '../../constants/Colors';

const WishlistScreen = () => {
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
        <AppHeaderText subheader="Wishlist" />
      </View>
    </SafeAreaView>
  );
};

export default WishlistScreen;

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
