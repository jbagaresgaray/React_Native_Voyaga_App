import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppTag from '../../components/AppTag';
import {FONT_LIGHT, FONT_SEMI_BOLD} from '../../constants/Typography';
import COLORS from '../../constants/Colors';

const DetailsTags = () => {
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.Title}>Tags</Text>
      <View style={styles.TagWraps}>
        <AppTag />
        <AppTag />
        <AppTag />
        <AppTag />
        <AppTag />
        <TouchableOpacity style={styles.MoreButton} activeOpacity={0.8}>
          <Text style={styles.MoreButtonText}>more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsTags;

const styles = StyleSheet.create({
  MainContainer: {
    paddingVertical: 20,
    paddingHorizontal: 22,
    backgroundColor: COLORS.colorWhite,
  },
  Title: {
    ...FONT_SEMI_BOLD,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.39,
    color: COLORS.colorStandard,
    textTransform: 'uppercase',
  },
  MoreButton: {
    backgroundColor: '#E2E3E4',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 999,
    minWidth: 69,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MoreButtonText: {
    ...FONT_LIGHT,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.33,
    color: '#5E6870',
  },
  TagWraps: {
    marginTop: 18,
    rowGap: 16,
    columnGap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
