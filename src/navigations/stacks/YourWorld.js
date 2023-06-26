import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import YourWorldScreen from '../../screens/YourWorld';
import AllDestinationsScreen from '../../screens/AllDestinations';
import COLORS from '../../constants/Colors';
import DetailsScreen from '../../screens/Details';

const Stack = createStackNavigator();

export default function YourWorldNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="YourWorldScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="YourWorldScreen" component={YourWorldScreen} />
      <Stack.Screen name="AllDestinations" component={AllDestinationsScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
