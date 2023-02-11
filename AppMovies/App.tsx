import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Navigation from './src/navigation/Navigation';
import { ColorsProvider } from './src/context/ColorContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppDegradateColor>
        <Navigation />
      </AppDegradateColor>
    </NavigationContainer>

  );
};

export default App;

const AppDegradateColor = ({ children }: any) => {

  return (
    <ColorsProvider>
      {children}
    </ColorsProvider>
  );
};
