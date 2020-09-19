/* eslint-disable no-use-before-define */
import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks/index';

import Routes from './routes/auth.routes';

const App: React.FunctionComponent = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e23" />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#312e23' }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
