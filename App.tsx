import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Home } from './src/Home';
import SplashScreen from "react-native-splash-screen";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  })
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' backgroundColor={'#8257E5'} />
        <Home />
      </SafeAreaView>
    </>
  )
}