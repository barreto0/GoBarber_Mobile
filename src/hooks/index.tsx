/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';

import { AuthProvider } from './auth';

const AppProvider: React.FunctionComponent = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
