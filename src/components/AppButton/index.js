import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import PropTypes from 'prop-types';
import COLORS from '../../constants/Colors';
import {FONT_SEMI_BOLD} from '../../constants/Typography';

const AppButton = ({onPress, title, variant}) => {
  return (
    <Button
      buttonStyle={styles.AppButton}
      titleStyle={styles.AppButtonTitle}
      title={title}
      onPress={onPress}
    />
  );
};

AppButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

AppButton.defaultProps = {
  variant: 'primary',
};

export default AppButton;

const styles = StyleSheet.create({
  AppButton: {
    height: 53,
    borderRadius: 25,
    backgroundColor: COLORS.colorWhite,
  },
  AppButtonSecondary: {
    backgroundColor: COLORS.colorWhite,
  },
  AppButtonTitle: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: COLORS.colorPink,
    textTransform: 'uppercase',
    ...FONT_SEMI_BOLD,
  },
});
