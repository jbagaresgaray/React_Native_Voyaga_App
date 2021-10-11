import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import YourWorldScreen from '../../screens/YourWorld';

const Stack = createStackNavigator();

export default function YourWorldNavigator() {
  return (
    <Stack.Navigator initialRouteName="YourWorldScreen">
      <Stack.Screen name="YourWorldScreen" component={YourWorldScreen} />
    </Stack.Navigator>
  );
}
