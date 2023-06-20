import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Platform} from 'react-native';

import AppHeaderText from '../../components/AppHeaderText';

import COLORS from '../../constants/Colors';
import {FlashList} from '@shopify/flash-list';
import AppTravelCard from '../../components/AppTravelCard';
import AppTravelNewsCard from '../../components/AppTravelNewsCard';

const WishlistScreen = () => {
  const navigation = useNavigation();
  const fakeData = Array.from({
    length: 10,
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: () => undefined,
      headerLeft: () => null,
    });
  }, [navigation]);

  const renderItem = ({item, index}) => {
    return <AppTravelNewsCard />;
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <FlashList
        data={fakeData}
        contentContainerStyle={styles.FlashListContainer}
        ListHeaderComponent={
          <View style={styles.Content}>
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
    marginTop: Platform.OS === 'ios' ? 56 : 56,
  },
  Content: {
    marginBottom: 20,
  },
  FlashListContainer: {
    paddingHorizontal: 20,
  },
});
