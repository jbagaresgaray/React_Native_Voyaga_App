import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TravellingFriendsScreen from '../../screens/TravellingFriends';

const Stack = createStackNavigator();

export default function TravellingFriendsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="TravellingFriendsScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="TravellingFriendsScreen"
        component={TravellingFriendsScreen}
      />
    </Stack.Navigator>
  );
}
