import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import YourVoyagesScreen from '../../screens/YourVoyages';

const Stack = createStackNavigator();

export default function YourVoyagesNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="YourVoyagesScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="YourVoyagesScreen" component={YourVoyagesScreen} />
    </Stack.Navigator>
  );
}
