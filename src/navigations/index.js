import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '../screens/Onboarding';
import {ROUTES} from '../constants/routes';
import LandingScreen from '../screens/Landing';
import RegisterScreen from '../screens/Register';
import LoginScreen from '../screens/Login';
import ResetScreen from '../screens/Reset';
import VerifyScreen from '../screens/Verify';
import AllowLocationScreen from '../screens/AllowLocation';
import AllowNotificationScreen from '../screens/AllowNotification';
import CompleteProfileScreen from '../screens/CompleteProfile';
import CompleteProfileThankYouScreen from '../screens/CompleteThankYou';
import ForgotScreen from '../screens/Forgot';

import COLORS from '../constants/Colors';
import TabsNavigator from './tabs';

const RootStack = createStackNavigator();
const navigationOptions = {
  gestureEnabled: false,
  headerBackTitleVisible: false,
  headerTransparent: true,
  headerTintColor: COLORS.colorBackButton,
  headerStyle: {
    shadowColor: 'transparent',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
    elevation: 0,
    borderBottomWidth: 0,
  },
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
      <RootStack.Screen
        name={ROUTES.LANDING}
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name={ROUTES.ALLOW_LOCATION}
        component={AllowLocationScreen}
      />
      <RootStack.Screen
        name={ROUTES.ALLOW_NOTIFICATION}
        component={AllowNotificationScreen}
      />
      <RootStack.Screen
        name={ROUTES.COMPLETE_PROFILE}
        component={CompleteProfileScreen}
      />
      <RootStack.Screen
        name={ROUTES.COMPLETE_PROFILE_THANK_YOU}
        component={CompleteProfileThankYouScreen}
      />
      <RootStack.Screen name={ROUTES.FORGOT} component={ForgotScreen} />
      <RootStack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <RootStack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
      <RootStack.Screen name={ROUTES.RESET_PASSWORD} component={ResetScreen} />
      <RootStack.Screen name={ROUTES.VERIFY} component={VerifyScreen} />
      <RootStack.Screen
        name="Main"
        component={TabsNavigator}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigators;
