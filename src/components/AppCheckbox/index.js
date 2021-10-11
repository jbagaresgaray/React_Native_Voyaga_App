import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';

const AppCheckbox = props => {
  const {checked, onPress} = props;
  return (
    <CheckBox
      {...props}
      checked={checked}
      containerStyle={styles.AppCheckbox}
      checkedColor="#F4327F"
      iconType="ionicon"
      checkedIcon="checkbox"
      uncheckedIcon="square-outline"
      size={26}
    />
  );
};

export default AppCheckbox;

const styles = StyleSheet.create({
  AppCheckbox: {
    // height: 31,
    width: 31,
  },
});
