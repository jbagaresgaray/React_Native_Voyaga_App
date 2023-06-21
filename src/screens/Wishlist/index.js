import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import AppHeaderText from '../../components/AppHeaderText';

import COLORS from '../../constants/Colors';
import {FlashList} from '@shopify/flash-list';
import AppTravelNewsCard from '../../components/AppTravelNewsCard';
import {FAKE_DATA} from '../../constants';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {getDefaultHeaderHeight} from '@react-navigation/elements';
import {hasNotch} from 'react-native-device-info';

const WishlistScreen = () => {
  const navigation = useNavigation();
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: () => undefined,
      // headerLeft: () => null,
    });
  }, [navigation]);

  const renderItem = ({item, index}) => {
    return (
      <AppTravelNewsCard
        onPress={() => navigation.navigate('AllDestinations')}
      />
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <FlashList
        data={FAKE_DATA}
        contentContainerStyle={styles.FlashListContainer}
        ListHeaderComponent={
          <View
            style={{
              ...styles.Content,
              marginTop: hasNotch() ? 10 : headerHeight,
            }}>
            <AppHeaderText subheader="Wishlist" />
          </View>
        }
        renderItem={renderItem}
        estimatedItemSize={500}
      />
    </SafeAreaView>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: COLORS.colorContent,
  },
  Content: {
    marginBottom: 20,
  },
  FlashListContainer: {
    paddingHorizontal: 20,
  },
});
