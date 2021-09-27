import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import COLORS from '../../constants/Colors';
import {FONT_MEDIUM} from '../../constants/Typography';

const index = props => {
  const [focus, setFocus] = useState(false);

  return (
    <Input
      placeholderTextColor={COLORS.colorBackButton}
      {...props}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      inputContainerStyle={
        focus ? styles.inputContainerFocusStyle : styles.inputContainerStyle
      }
      inputStyle={styles.inputStyle}
    />
  );
};

export default index;

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderBottomWidth: 3,
    borderBottomColor: COLORS.colorInputDefault,
  },
  inputContainerFocusStyle: {
    borderBottomWidth: 3,
    borderBottomColor: COLORS.colorPink,
  },
  inputStyle: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.45,
    color: COLORS.colorStandard,
    ...FONT_MEDIUM,
  },
});
