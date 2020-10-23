import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes'
import { useFonts } from 'expo-font'

import { Poppins_800ExtraBold, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { Archivo_700Bold, Archivo_400Regular } from '@expo-google-fonts/archivo'
import { RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Archivo_700Bold,
    Archivo_400Regular,
    RobotoSlab_400Regular,
  })

  if (!fontsLoaded) {
    return null;
  }


  return (
    <>
      <Routes />
      <StatusBar style="dark" />
    </>
  );
}

