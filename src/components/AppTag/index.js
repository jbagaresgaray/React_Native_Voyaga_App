import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Divider, Icon} from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import {FONT_LIGHT} from '../../constants/Typography';
import COLORS from '../../constants/Colors';

const AppTag = () => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <LinearGradient
        colors={['#D23078', '#FE6161', '#FF7955']}
        locations={[0, 0.72, 1]}
        style={styles.AppTag}>
        <Text style={styles.AppTagText}>AppTag</Text>
        <Divider
          orientation="vertical"
          width={1}
          color="#FFFFFF"
          style={styles.Divider}
        />
        <Icon name="check" color={COLORS.colorWhite} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AppTag;

const styles = StyleSheet.create({
  AppTag: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
    minWidth: 69,
    backgroundColor: COLORS.colorPink2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Divider: {
    marginHorizontal: 6,
  },
  AppTagText: {
    ...FONT_LIGHT,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.33,
    color: COLORS.colorWhite,
  },
});
