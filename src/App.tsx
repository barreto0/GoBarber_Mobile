/* eslint-disable no-use-before-define */
import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FunctionComponent = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e23" />
    <View style={{ flex: 1, backgroundColor: '#312e23' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
