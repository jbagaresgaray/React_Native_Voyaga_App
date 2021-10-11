import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const AllDestinationsScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
    </SafeAreaView>
  );
};

export default AllDestinationsScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
