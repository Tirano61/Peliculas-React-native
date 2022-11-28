



import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { NavigationStacks } from './src/navigation.tsx/NavigationStacks';

export const App = () => {
  return (
    <NavigationContainer>
      <NavigationStacks />
    </NavigationContainer>
    
  )
}

export default App;
