import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WishlistScreen from '../../screens/Wishlist';
import AllDestinationsScreen from '../../screens/AllDestinations';

const Stack = createStackNavigator();

export default function WishlistNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="WishlistScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
      <Stack.Screen name="AllDestinations" component={AllDestinationsScreen} />
    </Stack.Navigator>
  );
}
