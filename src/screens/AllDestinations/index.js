import {getDefaultHeaderHeight} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {FAKE_DATA} from '../../constants';
import COLORS from '../../constants/Colors';
import {hasNotch} from 'react-native-device-info';

import AppHeaderText from '../../components/AppHeaderText';
import AppTravelCard from '../../components/AppTravelCard';
import AppSearchHeader from '../../components/AppSearchHeader';
import useStatusBarHeight from '../../hooks/useStatusBarHeight';

const AllDestinationsScreen = () => {
  const navigation = useNavigation();
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);
  const statusBarHeight = useStatusBarHeight();

  const renderItem = ({item, index}) => {
    return <AppTravelCard />;
  };

  return (
    <View style={styles.SafeAreaView}>
      <View
        style={{
          ...styles.Content,
          paddingTop: hasNotch() ? statusBarHeight + 10 : headerHeight,
        }}>
        <AppHeaderText hasBack subheader="All Destination" />
        <AppSearchHeader containerStyle={styles.Container} />
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

export default AllDestinationsScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: COLORS.colorContent2,
  },
  Content: {
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: COLORS.colorContent,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 4,
  },
  FlashListContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  Container: {
    marginTop: 24,
  },
});
