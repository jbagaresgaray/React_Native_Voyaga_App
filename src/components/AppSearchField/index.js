import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import IconSearch from '../../assets/svg/IconSearch.svg';
import COLORS from '../../constants/Colors';
import {FONT_LIGHT} from '../../constants/Typography';

const AppSearchField = props => {
  return (
    <View style={styles.SearchContainer}>
      <IconSearch style={styles.IconSearch} />
      <TextInput
        {...props}
        style={styles.TextInput}
        placeholder="Search"
        placeholderTextColor={COLORS.colorDetail}
      />
    </View>
  );
};

export default AppSearchField;

const styles = StyleSheet.create({
  SearchContainer: {
    position: 'relative',
    borderWidth: 1,
    borderColor: COLORS.colorBackButton,
    borderRadius: 22,
    backgroundColor: '#F7F7F7',
    flex: 1,
  },
  TextInput: {
    overflow: 'hidden',
    borderRadius: 22,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginLeft: 28,
    color: COLORS.colorStandard,
    ...FONT_LIGHT,
    fontSize: 16,
    lineHeight: 19,
  },
  IconSearch: {
    position: 'absolute',
    left: 20,
    top: 12,
    bottom: 0,
  },
});
