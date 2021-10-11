import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import WishlistScreen from '../../screens/Wishlist';

const Stack = createStackNavigator();

export default function WishlistNavigator() {
  return (
    <Stack.Navigator initialRouteName="WishlistScreen">
      <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
    </Stack.Navigator>
  );
}
