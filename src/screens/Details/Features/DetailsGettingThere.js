import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ListItem} from 'react-native-elements';

import {FAKE_DATA} from '../../../constants';
import IconFilterSVG from '../../../assets/svg/IconFilter.svg';
import {
  FONT_LIGHT,
  FONT_REGULAR,
  FONT_SEMI_BOLD,
} from '../../../constants/Typography';
import COLORS from '../../../constants/Colors';

const DetailsGettingThere = () => {
  const renderItem = ({item, index}) => {
    return (
      <ListItem containerStyle={styles.FlatListItem}>
        <ListItem.Content>
          <ListItem.Title style={styles.ListItemTitleStyle}>
            Link {index + 1}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.ListItemSubTitleStyle}>
            4 schedules available
          </ListItem.Subtitle>
        </ListItem.Content>
        <Text style={styles.ListItemAmountStyle}>$300</Text>
      </ListItem>
    );
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.TitleStyle}>Getting There</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.Buttons}>
          <IconFilterSVG />
        </TouchableOpacity>
      </View>
      <FlatList data={FAKE_DATA} renderItem={renderItem} />
    </View>
  );
};

export default DetailsGettingThere;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 21,
    borderBottomColor: COLORS.colorBorder,
    borderBottomWidth: 2,
    marginBottom: 35,
  },
  TitleStyle: {
    ...FONT_SEMI_BOLD,
    fontSize: 17,
    lineHeight: 20,
    letterSpacing: 0.47,
    color: COLORS.colorStandard,
    textTransform: 'uppercase',
  },
  ListItemTitleStyle: {
    ...FONT_SEMI_BOLD,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.75,
    color: COLORS.colorStandard,
    marginBottom: 6,
  },
  ListItemSubTitleStyle: {
    ...FONT_LIGHT,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.33,
    color: COLORS.colorNote,
  },
  ListItemAmountStyle: {
    ...FONT_SEMI_BOLD,
    fontSize: 21,
    lineHeight: 25,
    letterSpacing: 0.58,
    color: COLORS.colorPink,
  },
  FlatListItem: {
    backgroundColor: COLORS.colorContent,
  },
});
