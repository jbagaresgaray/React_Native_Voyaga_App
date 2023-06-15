import React, { useEffect } from 'react';
import {StatusBar} from 'react-native';

import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigators from './navigations';

import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const App = () => {
  useEffect(() => {
    async function prepare() {
      await SplashScreen.hideAsync();
    }

    prepare();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="default" />
        <NavigationContainer>
          <RootNavigators />
        </NavigationContainer>
      </SafeAreaProvider>
    </SafeAreaProvider>
  );
};

export default App;
