import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Home } from './src/Home';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={'#121015'} />
      <Home />
    </>
  )
}