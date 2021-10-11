import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import COLORS from '../../constants/Colors';
import {FONT_SEMI_BOLD} from '../../constants/Typography';

const AppButton = ({onPress, title, variant, type}) => {
  const primaryColors = {
    colors: ['#D23078', '#FE6161', '#FF7955'],
    location: [0, 0.5, 1],
    start: {x: 0.46, y: 0.9},
    end: {x: 0.46, y: 0},
  };

  const secondaryColors = {
    colors: ['white', 'white'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 0},
  };

  const clearColors = {
    colors: ['transparent', 'transparent', 'transparent'],
    location: [0, 0.5, 1],
    start: {x: 0.46, y: 0.9},
    end: {x: 0.46, y: 0},
  };

  const renderButtonStyle = () => {
    if (type === 'clear') {
      return styles.AppButtonClear;
    } else if (type === 'outline') {
    } else {
      if (variant === 'primary') {
        return styles.AppButtonPrimary;
      } else if (variant === 'secondary') {
        return styles.AppButtonSecondary;
      } else {
        return styles.AppButtonSecondary;
      }
    }
  };

  const renderButtonGradientProps = () => {
    if (type === 'clear') {
      return clearColors;
    } else if (type === 'outline') {
    } else {
      if (variant === 'primary') {
        return primaryColors;
      } else if (variant === 'secondary') {
        return secondaryColors;
      } else {
        return secondaryColors;
      }
    }
  };

  const renderTitleStyle = () => {
    if (type === 'clear') {
      return styles.AppButtonTitleClear;
    } else if (type === 'outline') {
    } else {
      if (variant === 'primary') {
        return styles.AppButtonTitlePrimary;
      } else if (variant === 'secondary') {
        return styles.AppButtonTitleSecondary;
      } else {
        return styles.AppButtonTitleSecondary;
      }
    }
  };

  return (
    <Button
      ViewComponent={LinearGradient}
      linearGradientProps={renderButtonGradientProps()}
      buttonStyle={StyleSheet.flatten([styles.AppButton, renderButtonStyle()])}
      titleStyle={StyleSheet.flatten([
        styles.AppButtonTitle,
        renderTitleStyle(),
      ])}
      activeOpacity={0.8}
      title={title}
      type={type}
      onPress={onPress}
    />
  );
};

AppButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['outline', 'clear']),
};

AppButton.defaultProps = {
  variant: 'primary',
};

export default AppButton;

const styles = StyleSheet.create({
  AppButton: {
    height: 53,
    borderRadius: 25,
    marginBottom: 6,
    marginTop: 6,
  },
  AppButtonPrimary: {
    backgroundColor: COLORS.colorPink,
  },
  AppButtonSecondary: {
    backgroundColor: COLORS.colorWhite,
  },
  AppButtonClear: {
    backgroundColor: 'transparent',
  },
  AppButtonTitle: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    textTransform: 'uppercase',
    ...FONT_SEMI_BOLD,
  },
  AppButtonTitlePrimary: {
    color: COLORS.colorWhite,
  },
  AppButtonTitleSecondary: {
    color: COLORS.colorPink,
  },
  AppButtonTitleClear: {
    color: COLORS.colorNote,
  },
});
