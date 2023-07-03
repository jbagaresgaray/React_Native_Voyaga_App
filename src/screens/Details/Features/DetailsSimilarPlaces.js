import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FAKE_DATA} from '../../../constants';
import IconFilterSVG from '../../../assets/svg/IconFilter.svg';
import COLORS from '../../../constants/Colors';
import {FONT_SEMI_BOLD} from '../../../constants/Typography';
import {useNavigation} from '@react-navigation/native';
import AppTravelCard from '../../../components/AppTravelCard';
import {FlashList} from '@shopify/flash-list';

const DetailsSimilarPlaces = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Details');
  };

  const renderItem = ({item, index}) => {
    return <AppTravelCard onPress={onPress} />;
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.TitleStyle}>Similar Places</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.Buttons}>
          <IconFilterSVG />
        </TouchableOpacity>
      </View>
      <FlashList
        data={FAKE_DATA}
        contentContainerStyle={styles.FlashListContainer}
        renderItem={renderItem}
        estimatedItemSize={500}
      />
    </View>
  );
};

export default DetailsSimilarPlaces;

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
  FlashListContainer: {
    paddingBottom: 70,
  },
});
