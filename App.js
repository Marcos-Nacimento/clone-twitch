import React from 'react';
import AppLoading from 'expo-app-loading';
import 
{
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';

// route
import MainNavigation from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  };

  return(
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};