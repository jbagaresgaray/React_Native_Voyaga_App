import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import COLORS from '../../constants/Colors';
import {FONT_LIGHT, FONT_SEMI_BOLD} from '../../constants/Typography';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const AppHeaderText = ({header, subheader, message, hasBack}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.MainContainer}>
      {hasBack && (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            size={36}
            color={COLORS.colorBackButton}
            style={{
              left: -10,
            }}
          />
        </Pressable>
      )}
      {header && <Text style={styles.HeaderText}>{header}</Text>}
      <View style={styles.Container}>
        {subheader && <Text style={styles.SubHeaderText}>{subheader}</Text>}
        {message && <Text style={styles.MessageText}>{message}</Text>}
      </View>
    </View>
  );
};

export default AppHeaderText;

const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Container: {
    alignItems: 'flex-start',
  },
  HeaderText: {
    fontSize: 28,
    lineHeight: 41,
    letterSpacing: 0.78,
    color: COLORS.colorStandard,
    ...FONT_SEMI_BOLD,
  },
  SubHeaderText: {
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: 0.67,
    color: COLORS.colorStandard,
    ...FONT_SEMI_BOLD,
  },
  MessageText: {
    marginTop: 6,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.45,
    color: COLORS.colorStandardFade,
    ...FONT_LIGHT,
  },
});
