



import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { NavigationStacks } from './src/navigation.tsx/NavigationStacks';
import { FadeScreen } from './src/screens/FadeScreen';

export const App = () => {
  return (
    <NavigationContainer>
      <NavigationStacks />
      {/* <FadeScreen /> */}
    </NavigationContainer>
    
  )
}

export default App;
