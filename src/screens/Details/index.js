import React from 'react';
import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
