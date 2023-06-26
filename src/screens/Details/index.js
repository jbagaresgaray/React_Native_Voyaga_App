import {LinearGradient} from 'expo-linear-gradient';
import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, Image, ScrollView, Text} from 'react-native';
import COLORS from '../../constants/Colors';
import AppTravelActionButton from '../../components/AppTravelActionButton';
import {useNavigation} from '@react-navigation/native';
import AppTravelPriceBadge from '../../components/AppTravelPriceBadge';
import AppPinPlaceLocation from '../../components/AppPinPlaceLocation';

const DetailsScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerShown: true,
      headerBackTitleVisible: false,
      headerTintColor: COLORS.colorBackButton,
      headerLeftContainerStyle: {
        paddingLeft: 20,
      },
      headerRightContainerStyle: {
        paddingRight: 20,
      },
      headerTitle: () => undefined,
      headerRight: () => <AppTravelPriceBadge />,
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.SafeAreaView}>
      <View style={styles.TravelCard}>
        <LinearGradient
          colors={[
            'rgba(0,0,0,0.4)',
            'rgba(37,37,37,0)',
            'rgba(170,170,170,0)',
          ]}
          style={styles.LinearGradient}
        />
        <Image
          source={require('../../assets/img/travel.jpg')}
          resizeMode="cover"
          style={styles.DetailsImage}
        />
        <AppTravelActionButton containerStyle={styles.AppTravelActionButton} />
      </View>
      <View>
        <Text style={styles.LocationText}>Siargao</Text>
        <AppPinPlaceLocation location="ASIA, PHILIPPINES" />
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: COLORS.colorContent2,
  },
  TravelCard: {
    height: 481,
    marginBottom: 20,
    position: 'relative',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: COLORS.colorDetail,
  },
  LinearGradient: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
  },
  DetailsImage: {
    height: 481,
    width: '100%',
  },
  AppTravelActionButton: {
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
});
