import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';

const YourWorldScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
    </SafeAreaView>
  );
};

export default YourWorldScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
