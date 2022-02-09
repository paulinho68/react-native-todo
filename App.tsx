import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import SplashScreen from "react-native-splash-screen";
import { TasksProvider } from './src/Context/useTask';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  })

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <TasksProvider>
          <StatusBar barStyle='light-content' backgroundColor={'#8257E5'} />
          <Home />
        </TasksProvider>
      </SafeAreaView>
    </>
  )
}