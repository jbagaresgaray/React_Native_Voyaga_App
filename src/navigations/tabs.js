import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TravellingFriendsNavigator from './stacks/TravellingFriends';
import WishlistNavigator from './stacks/WishLists';
import YourAccountNavigator from './stacks/YourAccount';
import YourVoyagesNavigator from './stacks/YourVoyages';
import YourWorldNavigator from './stacks/YourWorld';

import AppTabBar from '../components/AppTabBar';

const Tab = createBottomTabNavigator();
export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      tabBar={props => <AppTabBar {...props} />}>
      <Tab.Screen name="YourWorld" component={YourWorldNavigator} />
      <Tab.Screen name="Wishlist" component={WishlistNavigator} />
      <Tab.Screen name="YourVoyages" component={YourVoyagesNavigator} />
      <Tab.Screen
        name="TravellingFriends"
        component={TravellingFriendsNavigator}
      />
      <Tab.Screen name="YourAccount" component={YourAccountNavigator} />
    </Tab.Navigator>
  );
}
