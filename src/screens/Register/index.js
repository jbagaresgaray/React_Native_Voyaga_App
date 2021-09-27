import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
