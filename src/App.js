import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigators from './navigations';

import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

SplashScreen.preventAutoHideAsync();

const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.hideAsync();
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

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
