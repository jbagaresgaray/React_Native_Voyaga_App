import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

const CompleteProfileScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
    </SafeAreaView>
  );
};

export default CompleteProfileScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
