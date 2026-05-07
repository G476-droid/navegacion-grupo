import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { StatusBar } from 'expo-status-bar';
import { BottomTabs } from './src/navigation/BottomTabs';
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style='light'/>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;

