import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '../screens/Onboarding';
import {ROUTES} from '../constants/routes';

const RootStack = createStackNavigator();
const navigationOptions = {
  gestureEnabled: false,
  headerBackTitleVisible: false,
};

const RootNavigators = () => {
  console.log('RootNavigators:');
  return (
    <RootStack.Navigator
      screenOptions={navigationOptions}
      initialRouteName={ROUTES.ONBOARDING}>
      <RootStack.Screen
        name={ROUTES.ONBOARDING}
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      {/* <RootStack.Screen
      name="Landing"
      component={Landing}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Register"
      options={{
        headerTransparent: true,
        headerTintColor: '#111',
        headerTitle: () => null,
      }}
      component={Register}
    />
    <RootStack.Screen
      name="Login"
      options={{
        headerTransparent: true,
        headerTintColor: '#111',
        headerTitle: () => null,
      }}
      component={Login}
    />
    <RootStack.Screen
      name="Main"
      component={BottomTabNavigator}
      options={{headerShown: false}}
    /> */}
    </RootStack.Navigator>
  );
};

export default RootNavigators;
