import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ListItem} from 'react-native-elements';

import {FAKE_DATA} from '../../../constants';
import IconFilterSVG from '../../../assets/svg/IconFilter.svg';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../../constants/Typography';
import COLORS from '../../../constants/Colors';

const DetailsBeingThere = () => {
  const renderItem = ({item, index}) => {
    return (
      <ListItem containerStyle={styles.FlatListItem}>
        <ListItem.Content>
          <ListItem.Title style={styles.ListItemTitleStyle}>
            Link {index + 1}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.ListItemSubTitleStyle}>
            Details Here
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color={COLORS.colorDetail} />
      </ListItem>
    );
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.TitleStyle}>Being There</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.Buttons}>
          <IconFilterSVG />
        </TouchableOpacity>
      </View>
      <FlatList data={FAKE_DATA} renderItem={renderItem} />
    </View>
  );
};

export default DetailsBeingThere;

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
    ...FONT_REGULAR,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.75,
    color: '#212121',
    marginBottom: 6,
  },
  ListItemSubTitleStyle: {
    ...FONT_SEMI_BOLD,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 1.46,
    color: COLORS.colorDetail,
    textTransform: 'uppercase',
  },
  FlatListItem: {
    backgroundColor: COLORS.colorContent,
  },
});
