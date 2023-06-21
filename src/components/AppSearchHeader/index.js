import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import AppSearchField from '../AppSearchField';

import IconFilterSVG from '../../assets/svg/IconFilter.svg';
import IconSortSVG from '../../assets/svg/IconSort.svg';
import IconWorldSVG from '../../assets/svg/IconWorld.svg';

const AppSearchHeader = ({containerStyle, buttonContainerStyle}) => {
  return (
    <View style={[styles.SearchContainer, containerStyle]}>
      <AppSearchField />
      <View style={[styles.ButtonsContainer, buttonContainerStyle]}>
        <TouchableOpacity activeOpacity={0.8} style={styles.Buttons}>
          <IconWorldSVG />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.Buttons}>
          <IconFilterSVG />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.Buttons}>
          <IconSortSVG />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppSearchHeader;

const styles = StyleSheet.create({
  SearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ButtonsContainer: {
    marginLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Buttons: {
    marginHorizontal: 8,
  },
});
