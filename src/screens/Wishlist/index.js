import React from 'react';
import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const WishlistScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
    </SafeAreaView>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
