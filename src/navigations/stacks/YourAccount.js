import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import YourAccountScreen from '../../screens/YourAccount';

const Stack = createStackNavigator();

export default function YourAccountNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="YourAccountScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="YourAccountScreen" component={YourAccountScreen} />
    </Stack.Navigator>
  );
}
