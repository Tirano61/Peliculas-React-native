



import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { NavigationStacks } from './src/navigation.tsx/NavigationStacks';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';


const AppState = ({ children }: any) =>{
  return(
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <NavigationStacks />
      </AppState>
      {/* <FadeScreen /> */}
    </NavigationContainer>
    
  )
}

export default App;
